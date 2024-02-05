import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

type BUTTON_PROPS = {
  btnLabel: string;
  pressHandler: () => void;
  styles: {
    buttonStyle: ViewStyle;
    labelStyle: TextStyle;
  };
};

const Button = ({btnLabel, pressHandler, styles}: BUTTON_PROPS) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={pressHandler}>
      <Text style={styles.labelStyle}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Button;
