import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesSignUp = () => {
  const {theme} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: top,
    },
    title: {
      ...getFonts({fontSize: 24}),
      color: theme.text,
      alignSelf: 'center',
    },
  });
};

export default stylesSignUp;
