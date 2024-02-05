import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesThemeSwitch = () => {
  const {top} = useSafeAreaInsets();
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      top: top,
      right: 15,
      paddingHorizontal: 13,
      paddingVertical: 5,
      borderRadius: 17,
      marginTop: 20,
      backgroundColor: theme.primary,
    },
    icon: {
      marginRight: 10,
    },
    switchLabel: {
      fontSize: 20,
      fontWeight: '600',
      marginRight: 10,
    },
  });
};

export default stylesThemeSwitch;
