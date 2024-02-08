import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesGoalModal = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: theme.primary,
      paddingTop: 15,
    },
    goalTitleContainer: {},
    goalTitle: {
      ...getFonts({fontSize: 30}),
      marginLeft: 30,
      marginTop: 10,
      color: theme.text,
    },
    closeBtn: {
      position: 'absolute',
      backgroundColor: theme.secondary,
      right: 15,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    closeBtnLabel: {
      ...getFonts({fontSize: 18, fontWeight: '500'}),
      color: '#000000',
    },
  });
};

export default stylesGoalModal;
