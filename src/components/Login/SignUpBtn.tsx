import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import stylesSignUpBtn from '~/config/styles/components/Login/SignUpBtn.styles';

const SignUpBtn = () => {
  const styles = stylesSignUpBtn();
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Don't have an account yet ?</Text>
      <TouchableOpacity>
        <Text style={styles.btnLabel}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpBtn;
