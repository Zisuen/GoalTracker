import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {loginUser} from '~/services/api';
import {login} from '~/services/redux/loginSlice';

import Button from '../Button';
import UserInput from './UserInput';

import stylesLoginForm from '~/config/styles/components/Login/LoginForm.styles';

type USER_INPUT = {
  email: string;
  password: string;
};
export type HANDLE_INPUT_CHANGE = {
  field: 'email' | 'password';
  value: string;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const styles = stylesLoginForm();
  const [inputState, setInputState] = useState<USER_INPUT>({
    email: '',
    password: '',
  });

  const handleInputChange = ({field, value}: HANDLE_INPUT_CHANGE) => {
    setInputState({...inputState, [field]: value});
  };

  const loginHandler = async () => {
    const isLoggedIn = await loginUser({userInput: inputState});
    if (isLoggedIn) {
      dispatch(login());
    }
    setInputState({email: '', password: ''});
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Please sign in to continue.</Text>
      </View>
      <UserInput
        isPassword={false}
        getter={inputState.email}
        setter={handleInputChange}
      />
      <UserInput
        isPassword
        getter={inputState.password}
        setter={handleInputChange}
      />
      <Button
        styles={{
          buttonStyle: styles.buttonStyle,
          labelStyle: styles.labelStyle,
        }}
        pressHandler={loginHandler}
        btnLabel={'LOGIN'}
      />
    </View>
  );
};

export default LoginForm;
