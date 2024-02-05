import React from 'react';
import {View} from 'react-native';

import LoginForm from '~/components/Login/LoginForm';
import SignUpBtn from '~/components/Login/SignUpBtn';
import ThemeSwitch from '~/components/ThemeSwitch';

import stylesLoginScreen from '~/config/styles/screens/Auth/Login.styles';

const Login = () => {
  const styles = stylesLoginScreen();
  return (
    <View style={styles.rootContainer}>
      <ThemeSwitch />
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
      <SignUpBtn />
    </View>
  );
};

export default Login;
