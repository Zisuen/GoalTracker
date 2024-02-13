import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesAddGoal = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      borderRadius: 15,
      backgroundColor: theme.secondary,
    },
    buttonLabel: {
      marginHorizontal: 5,
      ...getFonts({fontSize: 17}),
      color: theme.text_inverse,
    },
  });
};

export default stylesAddGoal;
