import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '~/services/context/ThemeContext';
import getFonts from '~/assets/getFonts';

const stylesNewInput = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    inputContainer: {
      backgroundColor: theme.primary,
      marginHorizontal: 15,
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 10,
      marginBottom: 15,
    },
    inputLabel: {
      ...getFonts({fontSize: 20}),
      color: theme.text,
      marginLeft: 20,
      marginBottom: 5,
    },
    input: {
      fontSize: 17,
      color: theme.text,
      marginHorizontal: 10,
      borderBottomColor: 'white',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
};

export default stylesNewInput;
