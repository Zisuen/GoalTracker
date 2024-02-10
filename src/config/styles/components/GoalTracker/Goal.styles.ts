import {useContext} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

type STYLE_PROPS = {
  percentage: number;
};

const stylesGoal = ({percentage}: STYLE_PROPS) => {
  const {theme} = useContext(ThemeContext);
  return StyleSheet.create({
    rootContainer: {
      marginHorizontal: 10,
      marginBottom: 20,
    },
    goalContainer: {
      flex: 1,
      borderRadius: 20,
      backgroundColor: theme.primary,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    goalTitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    goalTitleText: {
      ...getFonts({fontSize: 24}),
      color: theme.text,
      marginLeft: 10,
    },
    goalTitleDate: {
      ...getFonts({fontWeight: 'bold'}),
      color: theme.text,
    },
    goalDescriptionContainer: {
      marginLeft: 5,
      marginBottom: 10,
    },
    goalDescriptionText: {
      ...getFonts({fontSize: 16, fontFamily: 'PTSans-Italic'}),
      color: theme.text,
    },
    goalProgressContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    goalProgressBarContainer: {
      width: Dimensions.get('screen').width - 20 - 20,
      overflow: 'hidden',
      height: 25,
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowOffset: {width: 2, height: 2},
      backgroundColor: theme.progressBarBase,
    },
    goalProgressBar: {
      flex: 1,
      backgroundColor: theme.progressBar,
      width: `${percentage}%`,
    },
    goalProgressPercentage: {
      ...getFonts({fontSize: 18}),
      color: '#ffffff',
      alignSelf: 'center',
      position: 'absolute',
    },
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

export default stylesGoal;
