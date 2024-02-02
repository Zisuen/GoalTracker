import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {HANDLE_INPUT_CHANGE} from './LoginForm';

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

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 12,
  },
  formTitle: {
    fontSize: 22,
    textTransform: 'capitalize',
  },
  formInput: {
    marginTop: 5,
    fontSize: 20,
  },
});
