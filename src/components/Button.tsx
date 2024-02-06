import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

type BUTTON_PROPS = {
  btnLabel: string;
  pressHandler: () => void;
  styles: {
    buttonStyle: ViewStyle;
    labelStyle: TextStyle;
  };
  disabled?: boolean;
};

const Button = ({
  btnLabel,
  pressHandler,
  styles,
  disabled = false,
}: BUTTON_PROPS) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.buttonStyle, {opacity: disabled ? 0.4 : 1}]}
      onPress={pressHandler}>
      <Text style={styles.labelStyle}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Button;
