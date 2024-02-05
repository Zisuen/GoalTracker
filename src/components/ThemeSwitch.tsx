import React, {useContext} from 'react';
import {View, Switch} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ThemeContext} from '~/services/context/ThemeContext';
import stylesThemeSwitch from '~/config/styles/components/ThemeSwitch.styles';

const ThemeSwitch = () => {
  const {theme} = useContext(ThemeContext);
  const {isDark, switchTheme} = useContext(ThemeContext);
  const styles = stylesThemeSwitch();

  return (
    <View style={styles.switchContainer}>
      <MCIcon
        name="theme-light-dark"
        color={theme.secondary}
        size={40}
        style={styles.icon}
      />
      <Switch value={isDark} onChange={switchTheme} />
    </View>
  );
};

export default ThemeSwitch;
