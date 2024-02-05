import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesLoginScreen = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.background,
    },
    formContainer: {
      padding: 20,
    },
  });
};

export default stylesLoginScreen;
