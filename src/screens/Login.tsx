import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {stylesLogin} from '../config/styles/screens/Login.style';
import {login} from '../redux/user';
import {signIn} from '../service/api';

type FormInput_PROPS = {
  title: string;
  getter: string;
  setter: (text: string) => void;
};
const FormInput = ({title, getter, setter}: FormInput_PROPS) => {
  const styles = stylesLogin();
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputContainerTitle}>{title}</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.inputField}
        value={getter}
        onChangeText={setter}
      />
    </View>
  );
};

const Login = () => {
  const styles = stylesLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const emailHandler = (text: string) => {
    setEmail(text);
  };
  const passwordHandler = (text: string) => {
    setPassword(text);
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const signInHandler = async () => {
    const isSuccess = await signIn({email, password});
    if (isSuccess) {
      clearForm();
      dispatch(login());
    } else {
      clearForm();
      console.log('SIGN IN HANDLER ERROR');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <FormInput title={'Email'} getter={email} setter={emailHandler} />
        <FormInput
          title={'Password'}
          getter={password}
          setter={passwordHandler}
        />
        <TouchableOpacity style={styles.btn} onPress={signInHandler}>
          <Text style={styles.btnTitle}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
