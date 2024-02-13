import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const stylesNewSubGoal = () => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    subGoalContainer: {
      backgroundColor: theme.secondary,
      marginHorizontal: 25,
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    subGoalTitle: {
      ...getFonts({fontSize: 17}),
      marginBottom: 5,
    },
    inputContainer: {
      backgroundColor: theme.secondary_disabled,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 5,
    },
    inputLabel: {
      ...getFonts({fontSize: 16}),
      color: theme.text_inverse,
    },
    input: {
      color: theme.text_inverse,
      fontSize: 15,
      borderBottomColor: theme.text_inverse,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginHorizontal: 5,
      paddingHorizontal: 5,
    },
    modeBtnsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 5,
      marginBottom: 10,
    },
    modeButton: {
      backgroundColor: theme.primary,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
    },
    modeButtonLabel: {
      ...getFonts({}),
      color: theme.text,
    },
  });
};

export default stylesNewSubGoal;
