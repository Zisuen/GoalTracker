import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

type BUTTON_PROPS = {
  pressHandler: () => void;
};

const Button = ({pressHandler}: BUTTON_PROPS) => {
  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
  },
});
