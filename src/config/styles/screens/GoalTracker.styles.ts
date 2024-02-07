import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {useContext} from 'react';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesGoalTracker = () => {
  const {theme} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return StyleSheet.create({
    listContentContainer: {
      paddingTop: top,
      paddingBottom: 20,
    },
    text: {
      ...getFonts({fontSize: 25}),
      color: theme.text,
      alignSelf: 'center',
    },
  });
};

export default stylesGoalTracker;
