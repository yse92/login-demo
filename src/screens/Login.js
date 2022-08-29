import React, {useState} from 'react';
import Wrapper from '../components/Wrapper';
import Tab from '../components/Tab';
import Input from '../components/Input';
import Submit from '../components/Submit';
import {ICONS} from '../components/icons';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleName = e => setName(e);
  const handlePassword = e => setPassword(e);

  return (
    <Wrapper url={ICONS['main']}>
      <Tab height="70%">
        <Input
          value={name}
          labelText="Mobile Number/Email"
          onChange={handleName}
        />
        <Input
          value={password}
          secureTextEntry={true}
          labelText="Password"
          iconURL={ICONS['eye']}
          onChange={handlePassword}
        />
        <Submit
          iconURL={ICONS['arrow']}
          title="SIGN IN"
          navigation={navigation}
        />
      </Tab>
    </Wrapper>
  );
};

export default Login;
