import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesAddGoalModal = () => {
  const {theme} = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  return StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: top,
    },
    title: {
      ...getFonts({fontSize: 30}),
      color: theme.text,
      alignSelf: 'center',
    },
    closeBtn: {
      position: 'absolute',
      top: top,
      right: 15,
    },
    labelContainer: {
      marginTop: 15,
    },
    label: {
      ...getFonts({fontSize: 20}),
      color: theme.text,
    },
    additionalInformationText: {
      ...getFonts({fontSize: 18}),
      color: theme.text,
      alignSelf: 'center',
      marginBottom: 10,
    },
  });
};

export default stylesAddGoalModal;
