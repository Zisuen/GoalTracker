import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import supabase from '../service/api';

type FormInput_PROPS = {
  title: string;
  getter: string;
  setter: (text: string) => void;
};
const FormInput = ({title, getter, setter}: FormInput_PROPS) => {
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const emailHandler = (text: string) => {
    setEmail(text);
  };
  const passwordHandler = (text: string) => {
    setPassword(text);
  };

  const signUpHandler = async () => {
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
    });
    setEmail('');
    setPassword('');
  };

  const signInHandler = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);
    setEmail('');
    setPassword('');
    getUser();
  };

  const signOutHandler = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    getUser();
  };

  const getUser = async () => {
    const {
      data: {user},
    } = await supabase.auth.getUser();
    if (user) {
      console.log('Signed in as: ', user.email);
      setAuthenticated(true);
    } else {
      console.log('NOT SIGNED IN');
      setAuthenticated(false);
    }
  };

  useLayoutEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'center'}}>
        {authenticated ? 'TRUE' : 'FALSE'}
      </Text>
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
        <TouchableOpacity style={styles.btn} onPress={getUser}>
          <Text style={styles.btnTitle}>Am I signed in?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={signOutHandler}>
          <Text style={styles.btnTitle}>SignOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f1ffff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    marginHorizontal: 30,
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputContainerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: 10,
  },
  inputField: {
    borderRadius: 4,
    backgroundColor: '#cbddff',
    fontSize: 14,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  btnTitle: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#3c8dff',
  },
});
