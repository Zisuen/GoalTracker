import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {HANDLE_INPUT_CHANGE} from './LoginForm';

import styles from '~/config/styles/components/Login/UserInput.styles';

type USER_INPUT = {
  inputType: 'email' | 'password';
  getter: string;
  setter: ({field, value}: HANDLE_INPUT_CHANGE) => void;
};

const UserInput = ({inputType, getter, setter}: USER_INPUT) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>{inputType}</Text>
      <TextInput
        style={styles.formInput}
        autoCapitalize="none"
        value={getter}
        onChangeText={text => setter({field: inputType, value: text})}
      />
    </View>
  );
};

export default UserInput;
