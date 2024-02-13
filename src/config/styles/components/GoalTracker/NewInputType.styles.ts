import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '~/services/context/ThemeContext';
import getFonts from '~/assets/getFonts';

const stylesNewInputType = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    choiceContainer: {
      backgroundColor: theme.primary,
      marginHorizontal: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 10,
      marginBottom: 15,
    },
    choiceLabel: {
      ...getFonts({fontSize: 20}),
      color: theme.text,
      marginLeft: 20,
      marginBottom: 5,
    },
    btnsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
};

export default stylesNewInputType;
