import React, {useCallback, useEffect, useRef, useState} from 'react';
import Wrapper from '../components/Wrapper';
import Tab from '../components/Tab';
import Input from '../components/Input';
import LogInButton from '../components/LogInButton';
import {ICONS} from '../components/icons';
import {observer} from 'mobx-react';
import store from '../store/store';
import {isEmailValid} from '../utils/isEmailValid';
import {isPasswordValid} from '../utils/isPasswordValid';
import {WelcomeBar} from '../components/WelcomeBar';
import {BottomBar} from '../components/BottomBar';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "./RootStackParamList";
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Platform } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

async function saveTokenToDatabase(token) {
  // Assume user is already signed in
  const userId = auth().currentUser?.uid;

  // Add the token to the users datastore
  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
}

const Login = observer(({navigation}: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmail = (e: string) => {
    setLogin(e)
    setEmailError('')
  }

  const handlePassword = (e: string) => {
    setPassword(e)
    setPasswordError('')
  }
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        console.log(token);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });
  }, []);
  const handleLogIn = useCallback(() => {
    const getEmailError = isEmailValid(login)
    const getPasswordError  = isPasswordValid(password)
    if (getEmailError.length === 0 && getPasswordError.length === 0) {
      navigation.navigate('Profile', {logged: store.users[0]});
    } else {
      setEmailError(getEmailError)
      setPasswordError(getPasswordError)
    }
  }, [login, password])

  return (
    <Wrapper url={ICONS['main']}>
      <Tab height="70%">
        <WelcomeBar title="Hi Student" description="Sign in to continue" />
        <Input
          value={login}
          labelText="Mobile Number/Email"
          onChange={handleEmail}
          error={emailError}
        />
        <Input
          value={password}
          secureTextEntry={true}
          labelText="Password"
          type='visible'
          onChange={handlePassword}
          error={passwordError}
        />
        <LogInButton
          iconURL={ICONS['arrow']}
          title="SIGN IN"
          onPress={handleLogIn}
        />
        <BottomBar text="Forgot Password?"/>
      </Tab>
    </Wrapper>
  );
});

export default Login;
