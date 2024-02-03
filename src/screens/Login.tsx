import React from 'react';
import {View} from 'react-native';

import LoginForm from '~/components/Login/LoginForm';

import styles from '~/config/styles/screens/Login.styles';

const Login = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </View>
  );
};

export default Login;
