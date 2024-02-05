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
      paddingHorizontal: 20,
    },
    backChevron: {
      position: 'absolute',
      top: top + 5,
      left: 20,
    },
    title: {
      ...getFonts({fontSize: 24}),
      color: theme.text,
      alignSelf: 'center',
      marginBottom: 20,
    },
    button: {
      alignItems: 'center',
      marginTop: 15,
      marginHorizontal: 30,
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 40,
      backgroundColor: theme.secondary,
    },
    buttonLabel: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export default stylesSignUp;
