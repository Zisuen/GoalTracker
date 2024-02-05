import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {HANDLE_INPUT_CHANGE} from './LoginForm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import stylesUserInput from '~/config/styles/components/Login/UserInput.styles';
import {ThemeContext} from '~/services/context/ThemeContext';

type USER_INPUT = {
  isPassword: boolean;
  getter: string;
  setter: ({field, value}: HANDLE_INPUT_CHANGE) => void;
};

const UserInput = ({isPassword, getter, setter}: USER_INPUT) => {
  const {theme} = useContext(ThemeContext);
  const [focused, setFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(isPassword);
  const styles = stylesUserInput({focused});
  const inputType = isPassword ? 'password' : 'email';

  const focusInput = (focus: boolean) => {
    setFocused(focus);
  };

  const showPasswordHandler = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.iconContainer}>
        <Icon
          name={!isPassword ? 'email-outline' : 'security'}
          color={theme.text}
          size={28}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.formTitle}>{inputType}</Text>
        <TextInput
          secureTextEntry={isSecure}
          style={styles.formInput}
          autoCapitalize="none"
          value={getter}
          placeholder={`Enter your ${inputType}`}
          placeholderTextColor={theme.placeholderText}
          onChangeText={text => setter({field: inputType, value: text})}
          onFocus={() => focusInput(true)}
          onBlur={() => focusInput(false)}
        />
      </View>
      {isPassword && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={showPasswordHandler}>
          <Icon
            name={isSecure ? 'eye-outline' : 'eye-off-outline'}
            color={theme.text}
            size={28}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserInput;
