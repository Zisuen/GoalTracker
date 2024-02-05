import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {HANDLE_INPUT_CHANGE} from './LoginForm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import stylesUserInput from '~/config/styles/components/Login/UserInput.styles';
import {ThemeContext} from '~/services/context/ThemeContext';

type USER_INPUT = {
  inputLabel: string;
  icon?: {
    iconName: string;
    iconColor: string;
    iconSize: number;
  };
  hasSecurity?: boolean;
  getter: string;
  setter: ({field, value}: HANDLE_INPUT_CHANGE) => void;
  confirmLine?: boolean;
  confirmData?: string;
  checkConfirm?: ({field, value}: HANDLE_INPUT_CHANGE) => void;
  confirm?: 'confirmEmail' | 'confirmPassword';
  isCorrect?: boolean;
};

const UserInput = ({
  inputLabel,
  icon = {iconName: 'rocket', iconColor: '#92fffb', iconSize: 28},
  hasSecurity,
  getter,
  setter,
  confirmLine,
  confirmData,
  checkConfirm,
  confirm,
  isCorrect,
}: USER_INPUT) => {
  const {theme} = useContext(ThemeContext);
  const [focused, setFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(hasSecurity);
  const styles = stylesUserInput({focused});

  const focusInput = (focus: boolean) => {
    setFocused(focus);
  };

  const showPasswordHandler = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            name={icon.iconName}
            color={icon.iconColor}
            size={icon.iconSize}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.formTitle}>{inputLabel}</Text>
          <TextInput
            secureTextEntry={isSecure}
            style={styles.formInput}
            autoCapitalize="none"
            value={getter}
            placeholder={
              inputLabel !== 'birthday'
                ? `Enter your ${inputLabel}`
                : 'DD-MM-YYYY'
            }
            placeholderTextColor={theme.placeholderText}
            onChangeText={text => setter({field: inputLabel, value: text})}
            onFocus={() => focusInput(true)}
            onBlur={() => focusInput(false)}
          />
        </View>
        {hasSecurity && (
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
      {confirmLine && checkConfirm && (
        <View style={styles.checkContainer}>
          <View style={styles.iconContainer}>
            <AntIcon
              style={styles.checkIcon}
              name={isCorrect ? 'checkcircle' : 'closecircle'}
              color={isCorrect ? '#098d0b' : '#e50000'}
              size={28}
            />
          </View>
          <View style={styles.confirmContainer}>
            <Text style={styles.formTitle}>confirm</Text>
            <View style={styles.container}>
              <TextInput
                secureTextEntry={isSecure}
                style={styles.formInput}
                autoCapitalize="none"
                value={confirmData}
                placeholder={`Confirm ${inputLabel}`}
                placeholderTextColor={theme.placeholderText}
                onChangeText={text =>
                  checkConfirm({field: confirm, value: text})
                }
                onFocus={() => focusInput(true)}
                onBlur={() => focusInput(false)}
              />
              {hasSecurity && (
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
          </View>
        </View>
      )}
    </View>
  );
};

export default UserInput;
