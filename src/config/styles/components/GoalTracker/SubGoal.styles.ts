import {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {ThemeContext} from '~/services/context/ThemeContext';
import getFonts from '~/assets/getFonts';

type PROPS = {
  percentage: number;
};

const stylesSubGoal = ({percentage}: PROPS) => {
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
      ...getFonts({fontSize: 13}),
      position: 'absolute',
      alignSelf: 'center',
      color: '#ffffff',
    },
    subGoalTitle: {
      ...getFonts({fontSize: 15}),
      color: theme.text,
    },
  });
};

export default stylesSubGoal;
