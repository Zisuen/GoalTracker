import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginForm from '~/components/Login/LoginForm';

const Login = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <LoginForm />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d6d6d6',
  },
  formContainer: {
    backgroundColor: '#ffddc1',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
});
