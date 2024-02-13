import {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {ThemeContext} from '~/services/context/ThemeContext';
import getFonts from '~/assets/getFonts';

type PROPS = {
  percentage: number;
  inModal?: boolean;
};

const stylesSubGoal = ({percentage, inModal}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    subGoalProgressRootContainer: {
      marginLeft: 15,
    },
    subGoalProgressContainer: {
      flexDirection: 'row',
      width: 200,
      alignItems: 'center',
      marginBottom: 5,
    },
    subGoalProgressBarContainer: {
      overflow: 'hidden',
      width: 90,
      borderRadius: 20,
      backgroundColor: theme.progressBarBase,
      marginRight: 15,
      justifyContent: 'center',
    },
    subGoalProgressBar: {
      flex: 1,
      width: `${percentage}%`,
      backgroundColor: theme.progressBar,
    },
    subGoalProgressPercentage: {
      ...getFonts({fontSize: 15}),
      position: 'absolute',
      alignSelf: 'center',
      color: '#ffffff',
    },
    subGoalTitle: {
      ...getFonts({fontSize: 15}),
      color: theme.text,
      marginBottom: 0,
    },
    inModalContainer: {
      marginBottom: 10,
    },
    inModalTitleContainer: {
      marginLeft: 10,
      marginBottom: 5,
    },
    inModalTitle: {
      ...getFonts({fontSize: 17}),
      color: theme.text,
    },
    inModalProgressTitle: {
      ...getFonts({fontSize: 15}),
      color: theme.text,
      marginLeft: 5,
    },
    inModalProgressBarBase: {
      overflow: 'hidden',
      height: 25,
      width: Dimensions.get('screen').width - 100,
      borderRadius: 20,
      backgroundColor: theme.progressBarBase,
      justifyContent: 'center',
    },
    inModalProgressBar: {
      flex: 1,
      width: `${percentage}%`,
      backgroundColor: theme.progressBar,
    },
    inModalProgress: {
      ...getFonts({fontSize: 17}),
      color: theme.text,
      position: 'absolute',
      alignSelf: 'center',
    },
  });
};

export default stylesSubGoal;
