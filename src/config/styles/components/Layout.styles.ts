import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '~/services/context/ThemeContext';

type STYLE_PROPS = {
  topPadding: boolean;
};

const stylesLayout = ({topPadding}: STYLE_PROPS) => {
  const {theme} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: topPadding ? top : 0,
    },
  });
};

export default stylesLayout;
