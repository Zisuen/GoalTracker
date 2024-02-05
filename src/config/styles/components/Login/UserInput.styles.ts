import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

type USER_INPUT_STYLE = {
  focused: boolean;
};

const stylesUserInput = ({focused}: USER_INPUT_STYLE) => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    rootContainer: {
      backgroundColor: focused ? theme.primary : theme.background,
      padding: 15,
      borderRadius: 20,
      marginBottom: 10,
    },
    container: {
      flexDirection: 'row',
    },
    iconContainer: {
      justifyContent: 'flex-end',
    },
    eyeIcon: {
      marginBottom: 3,
    },
    inputContainer: {
      marginLeft: 10,
      flex: 1,
    },
    formTitle: {
      ...getFonts({fontSize: 15}),
      marginLeft: 5,
      marginBottom: 5,
      color: theme.text,
    },
    formInput: {
      ...getFonts({fontSize: 20}),
      width: '100%',
      marginBottom: 3,
      color: theme.text,
    },
    confirmContainer: {
      marginTop: 10,
      marginLeft: 10,
    },
    checkContainer: {
      flexDirection: 'row',
    },
    checkIcon: {
      marginBottom: 2,
    },
  });
};

export default stylesUserInput;
