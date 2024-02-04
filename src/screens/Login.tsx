import React from 'react';
import {View} from 'react-native';

import LoginForm from '~/components/Login/LoginForm';
import ThemeSwitch from '~/components/ThemeSwitch';

import stylesLoginScreen from '~/config/styles/screens/Login.styles';

const Login = () => {
  const styles = stylesLoginScreen();
  return (
    <View style={styles.rootContainer}>
      <View style={styles.formContainer}>
        <LoginForm />
        <ThemeSwitch />
      </View>
    </View>
  );
};

export default Login;
