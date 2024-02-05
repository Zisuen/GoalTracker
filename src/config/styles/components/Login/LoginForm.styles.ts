import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesLoginForm = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    rootContainer: {
      borderRadius: 15,
    },
    labelContainer: {
      marginLeft: 10,
      marginBottom: 20,
    },
    title: {
      ...getFonts({
        fontSize: 30,
        fontWeight: 'bold',
      }),
      marginLeft: 10,
      color: theme.text,
    },
    subTitle: {
      ...getFonts({fontSize: 15, fontWeight: '300'}),
      color: theme.text,
    },
    buttonStyle: {
      alignItems: 'center',
      marginTop: 15,
      marginHorizontal: 30,
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 40,
      backgroundColor: theme.secondary,
    },
    labelStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export default stylesLoginForm;
