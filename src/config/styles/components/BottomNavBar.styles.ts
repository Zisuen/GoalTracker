import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesBottomNavBar = () => {
  const {theme} = useContext(ThemeContext);
  const {bottom} = useSafeAreaInsets();
  return StyleSheet.create({
    bottomNavBar: {
      backgroundColor: theme.primary,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingBottom: bottom,
      paddingTop: 10,
    },
    navBarBtn: {
      alignItems: 'center',
    },
    navBarBtnLabel: {
      ...getFonts({fontSize: 18}),
    },
  });
};

export default stylesBottomNavBar;
