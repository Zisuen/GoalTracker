import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesSignUpBtn = () => {
  const {theme} = useContext(ThemeContext);
  const {bottom} = useSafeAreaInsets();
  return StyleSheet.create({
    rootContainer: {
      position: 'absolute',
      bottom: bottom,
      alignSelf: 'center',
      alignItems: 'center',
    },
    title: {
      ...getFonts({fontSize: 20}),
      color: theme.text,
    },
    button: {},
    btnLabel: {
      ...getFonts({fontSize: 20}),
      color: theme.secondary,
    },
  });
};

export default stylesSignUpBtn;
