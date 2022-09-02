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

const Login = observer(({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmail = e => {
    setLogin(e)
    setEmailError('')
  }

  const handlePassword = e => {
    setPassword(e)
    setPasswordError('')
  }

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
