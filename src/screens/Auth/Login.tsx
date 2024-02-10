import {API_KEY, API_URL} from '@env';
import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';

import LoginForm from '~/components/Login/LoginForm';
import SignUpBtn from '~/components/Login/SignUpBtn';
import ThemeSwitch from '~/components/ThemeSwitch';

import stylesLoginScreen from '~/config/styles/screens/Auth/Login.styles';
import {AuthenticationStackParams} from '~/config/types/api.types';

type LOGIN_PROPS = {
  navigation: NavigationProp<AuthenticationStackParams>;
};
const Login = ({navigation}: LOGIN_PROPS) => {
  const styles = stylesLoginScreen();
  return (
    <View style={styles.rootContainer}>
      <ThemeSwitch />
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
      <SignUpBtn navigation={navigation} />
      <Text style={{color: 'white'}}>{API_URL}</Text>
      <Text style={{color: 'white'}}>{API_KEY}</Text>
    </View>
  );
};

export default Login;
