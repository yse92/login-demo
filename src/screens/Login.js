import React, {useCallback, useEffect, useRef, useState} from 'react';
import Wrapper from '../components/Wrapper';
import Tab from '../components/Tab';
import Input from '../components/Input';
import Submit from '../components/Submit';
import {ICONS} from '../components/icons';
import {validate} from '../utils/validate';
import {observer} from 'mobx-react';
import store from '../store/store';
import {isEmailValid} from '../utils/isEmailValid';
import {isPasswordValid} from '../utils/isPasswordValid';
import {isMobileValid} from '../utils/isMobileValid';

const Login = observer(({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [checked, setChecked] = useState(false)
  const mounted = useRef(true)

  useEffect(() =>{
    console.log('eemailError: ', emailError, 'passwordError: ', passwordError)
    console.log('mounted.current: ', mounted.current)
    if (emailError.length === 0 && passwordError.length === 0 && !mounted.current) {
      navigation.navigate('Profile');
      setChecked(false);
    }
  }, [checked])

  const handleSubmit = () => {
    setEmailError(isEmailValid(login))
    setPasswordError(isPasswordValid(password))
    mounted.current = false
    setChecked(!checked)
  };

  return (
    <Wrapper url={ICONS['main']}>
      <Tab height="70%">
        <Input
          value={login}
          labelText="Mobile Number/Email"
          onChange={e => setLogin(e)}
          error={emailError}
        />
        <Input
          value={password}
          secureTextEntry={true}
          labelText="Password"
          type='visible'
          onChange={e => setPassword(e)}
          error={passwordError}
        />
        <Submit
          iconURL={ICONS['arrow']}
          title="SIGN IN"
          onChange={handleSubmit}
        />
      </Tab>
    </Wrapper>
  );
});

export default Login;
