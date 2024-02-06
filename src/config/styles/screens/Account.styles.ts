import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesAccount = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    titleText: {
      ...getFonts({fontSize: 25}),
      color: theme.text,
      alignSelf: 'center',
    },
    subTitleText: {
      ...getFonts({fontSize: 16}),
      color: theme.text,
      alignSelf: 'center',
      marginBottom: 10,
    },
    buttonStyle: {
      position: 'absolute',
      bottom: 15,
      alignSelf: 'center',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 50,
      backgroundColor: theme.secondary,
    },
    labelStyle: {
      ...getFonts({fontSize: 20, fontWeight: 'bold'}),
    },
  });
};

export default stylesAccount;
