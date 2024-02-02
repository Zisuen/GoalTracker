import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {loginUser} from '~/services/api';
import {login} from '~/services/redux/loginSlice';

import Button from '../Button';
import UserInput from './UserInput';

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
    <View style={styles.container}>
      <UserInput
        inputType="email"
        getter={inputState.email}
        setter={handleInputChange}
      />
      <UserInput
        inputType="password"
        getter={inputState.password}
        setter={handleInputChange}
      />
      <Button pressHandler={loginHandler} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cdbfb5',
  },
});
