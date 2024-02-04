import React, {useContext} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {ThemeContext} from '~/services/context/ThemeContext';

const ThemeSwitch = () => {
  const {isDark, switchTheme} = useContext(ThemeContext);

  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchLabel}>{`${
        isDark ? 'Dark' : 'Light'
      }-mode`}</Text>
      <Switch value={isDark} onChange={switchTheme} />
    </View>
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 13,
    flexDirection: 'row',
    backgroundColor: '#adf7ff',
    width: 200,
    paddingVertical: 5,
    borderRadius: 17,
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10,
  },
});
