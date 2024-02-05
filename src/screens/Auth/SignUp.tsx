import {NavigationProp} from '@react-navigation/native';
import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '~/components/Button';
import UserInput from '~/components/Login/UserInput';
import stylesSignUp from '~/config/styles/screens/Auth/SignUp.styles';
import {AuthenticationStackParams} from '~/config/types/api.types';
import {signUpUser} from '~/services/api';
import {ThemeContext} from '~/services/context/ThemeContext';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type NEW_USER = {
  email: string;
  password: string;
  firstname: string;
  birthday: string;
};

type INPUT_HANDLE = {
  field: string;
  value: string;
};

type PROPS = {
  navigation: NavigationProp<AuthenticationStackParams>;
};

const SignUp = ({navigation}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesSignUp();
  const [newUser, setNewUser] = useState<NEW_USER>({
    email: '',
    password: '',
    firstname: '',
    birthday: '',
  });
  const [confirm, setConfirm] = useState({
    confirmEmail: '',
    confirmPassword: '',
  });
  const [allSet, setAllSet] = useState(false);

  const handleInputChange = ({field, value}: INPUT_HANDLE) => {
    setNewUser({...newUser, [field]: value});
  };

  const handleConfirm = ({field, value}: INPUT_HANDLE) => {
    setConfirm({...confirm, [field]: value});
  };

  const clearAll = () => {
    setNewUser({
      email: '',
      password: '',
      firstname: '',
      birthday: '',
    });
    setConfirm({
      confirmEmail: '',
      confirmPassword: '',
    });
    setAllSet(false);
  };

  const handleSignup = async () => {
    const response = await signUpUser({userInput: newUser});
    if (response) {
      clearAll();
      navigation.goBack();
    }
  };

  useEffect(() => {
    const checkData = () => {
      if (newUser.email === confirm.confirmEmail) {
        if (newUser.password === confirm.confirmPassword) {
          if (newUser.firstname) {
            if (newUser.birthday.length === 10) {
              return true;
            }
          }
        }
      }
      return false;
    };
    setAllSet(checkData());
  }, [confirm, newUser]);

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        style={styles.backChevron}
        onPress={() => {
          navigation.goBack();
          clearAll();
        }}>
        <MCIcon name="arrow-left-bold" size={28} color={theme.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Create Account</Text>
      <UserInput
        inputLabel="email"
        icon={{
          iconName: 'email-outline',
          iconColor: theme.text,
          iconSize: 28,
        }}
        getter={newUser.email}
        setter={handleInputChange}
        confirmLine
        confirmData={confirm.confirmEmail}
        checkConfirm={handleConfirm}
        confirm={'confirmEmail'}
        isCorrect={
          newUser.email && confirm.confirmEmail
            ? newUser.email === confirm.confirmEmail
            : false
        }
      />
      <UserInput
        hasSecurity
        inputLabel="password"
        icon={{
          iconName: 'security',
          iconColor: theme.text,
          iconSize: 28,
        }}
        getter={newUser.password}
        setter={handleInputChange}
        confirmLine
        confirmData={confirm.confirmPassword}
        checkConfirm={handleConfirm}
        confirm={'confirmPassword'}
        isCorrect={
          newUser.password && confirm.confirmPassword
            ? newUser.password === confirm.confirmPassword
            : false
        }
      />
      <UserInput
        inputLabel="firstname"
        icon={{
          iconName: 'passport',
          iconColor: theme.text,
          iconSize: 28,
        }}
        getter={newUser.firstname}
        setter={handleInputChange}
      />
      <UserInput
        inputLabel="birthday"
        icon={{
          iconName: 'cake-variant',
          iconColor: theme.text,
          iconSize: 28,
        }}
        getter={newUser.birthday}
        setter={handleInputChange}
      />
      <Button
        disabled={!allSet}
        btnLabel="Sign Up"
        pressHandler={handleSignup}
        styles={{buttonStyle: styles.button, labelStyle: styles.buttonLabel}}
      />
    </View>
  );
};

export default SignUp;
