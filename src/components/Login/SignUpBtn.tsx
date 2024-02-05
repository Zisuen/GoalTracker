import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import stylesSignUpBtn from '~/config/styles/components/Login/SignUpBtn.styles';
import {AuthenticationStackParams} from '~/config/types/api.types';

type SIGN_UP_BTN = {
  navigation: NavigationProp<AuthenticationStackParams>;
};

const SignUpBtn = ({navigation}: SIGN_UP_BTN) => {
  const styles = stylesSignUpBtn();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Don't have an account yet ?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.btnLabel}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpBtn;
