import {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {
  percentage: number;
};

const stylesGoalModal = ({percentage}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const {bottom} = useSafeAreaInsets();
  return StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: theme.primary,
      paddingTop: 10,
      paddingHorizontal: 20,
    },
    rootContentContainer: {
      paddingBottom: bottom,
    },
    goalTitleContainer: {},
    goalTitle: {
      ...getFonts({fontSize: 30}),
      marginLeft: 20,
      marginTop: 35,
      color: theme.text,
      marginBottom: 10,
    },
    closeBtn: {
      position: 'absolute',
      backgroundColor: theme.secondary,
      right: -10,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    closeBtnLabel: {
      ...getFonts({fontSize: 18, fontWeight: '500'}),
      color: '#000000',
    },
    goalDescriptionText: {
      ...getFonts({fontSize: 22, fontFamily: 'PTSans-Italic'}),
      marginTop: 10,
      color: theme.text,
      marginBottom: 10,
    },
    primaryProgressContainer: {
      marginTop: 10,
      marginBottom: 10,
    },
    primaryProgressTitle: {
      ...getFonts({fontSize: 18}),
      color: theme.text,
      marginBottom: 10,
    },
    progressBarContainer: {
      alignSelf: 'center',
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
    progressBar: {
      flex: 1,
      backgroundColor: theme.progressBar,
      width: `${percentage === 0 ? 3 : percentage}%`,
    },
    progressBarPercentage: {
      ...getFonts({fontSize: 18}),
      color: '#ffffff',
      alignSelf: 'center',
      position: 'absolute',
    },
    subGoalsContainer: {
      backgroundColor: theme.background,
      padding: 20,
      borderRadius: 30,
    },
    btnsContainer: {
      flexDirection: 'row',
      marginTop: 20,
      width: Dimensions.get('screen').width,
      alignSelf: 'center',
      justifyContent: 'space-evenly',
    },
    button: {
      backgroundColor: theme.secondary,
      borderRadius: 20,
    },
    deleteButton: {
      backgroundColor: '#b10000',
      borderRadius: 20,
    },
    buttonLabel: {
      ...getFonts({fontSize: 18, fontWeight: '500'}),
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
  });
};

export default stylesGoalModal;
