import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginUser} from '~/services/api';
import {login} from '~/services/redux/loginSlice';

type USER_INPUT = {
  type: 'email' | 'password';
  getter: string;
  setter: (text: string) => void;
};
const UserInput = ({type, getter, setter}: USER_INPUT) => {
  return (
    <View>
      <Text>{type}</Text>
      <TextInput
        autoCapitalize="none"
        style={{backgroundColor: '#def8f9', width: 200, height: 30}}
        value={getter}
        onChangeText={text => setter(text)}
      />
    </View>
  );
};

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    const isLoggedIn = await loginUser({email, password});
    if (isLoggedIn) {
      dispatch(login());
    }
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <UserInput
          type="email"
          getter={email}
          setter={(text: string) => setEmail(text)}
        />
        <UserInput
          type="password"
          getter={password}
          setter={(text: string) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => loginHandler()}
          style={{
            backgroundColor: '#629973',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 10,
            marginVertical: 5,
          }}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6d6d6',
  },
});
