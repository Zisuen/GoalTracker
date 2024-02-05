import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {loginUser} from '~/services/api';
import {
  login,
  updateBirthday,
  updateEmail,
  updateFirstname,
} from '~/services/redux/loginSlice';

import Button from '../Button';
import UserInput from './UserInput';

import stylesLoginForm from '~/config/styles/components/Login/LoginForm.styles';
import {ThemeContext} from '~/services/context/ThemeContext';

type USER_INPUT = {
  email: string;
  password: string;
};
export type HANDLE_INPUT_CHANGE = {
  field: string;
  value: string;
};

const LoginForm = () => {
  const {theme} = useContext(ThemeContext);
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
    const session = await loginUser({userInput: inputState});
    if (session) {
      dispatch(login());
      dispatch(updateEmail(session.user_metadata.email));
      dispatch(updateFirstname(session.user_metadata.firstname));
      dispatch(updateBirthday(session.user_metadata.birthday));
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
        inputLabel="email"
        icon={{iconName: 'email-outline', iconColor: theme.text, iconSize: 28}}
        getter={inputState.email}
        setter={handleInputChange}
      />
      <UserInput
        inputLabel="password"
        icon={{iconName: 'security', iconColor: theme.text, iconSize: 28}}
        hasSecurity
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
