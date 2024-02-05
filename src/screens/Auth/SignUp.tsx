import React from 'react';
import {View, Text} from 'react-native';
import stylesSignUp from '~/config/styles/screens/Auth/SignUp.styles';
import {signUpUser} from '~/services/api';

const SignUp = () => {
  const styles = stylesSignUp();
  const newUser = {
    email: 'urbanovsky97@gmail.com',
    password: 'Password@123',
    firstname: 'Martin',
    birthday: '23-12-1997',
  };

  const handleSignup = () => {
    signUpUser({userInput: newUser});
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Create Account</Text>
    </View>
  );
};

export default SignUp;
