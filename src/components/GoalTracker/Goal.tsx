import React, {useContext} from 'react';
import {Dimensions} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';

const Goal = () => {
  const {theme} = useContext(ThemeContext);
  const percentage = 34;
  const goalDescription =
    'Save more money for the year 2024, making the description longer to handle wrapping on the page';
  const subGoal = [
    {
      sub_goal_id: 0,
      sub_goal_title: '50K to end of Q1',
      sub_goal_description: 'Each month average of 17K',
      sub_goal_progress: 100,
      sub_goal_is_done: true,
    },
    {
      sub_goal_id: 1,
      sub_goal_title: '100K to end of Q2',
      sub_goal_description: 'Each month average of 17K',
      sub_goal_progress: 74,
      sub_goal_is_done: false,
    },
    {
      sub_goal_id: 2,
      sub_goal_title: '150K to end of Q3',
      sub_goal_description: 'Each month average of 17K',
      sub_goal_progress: 30,
      sub_goal_is_done: false,
    },
    {
      sub_goal_id: 3,
      sub_goal_title: '200K to end of Q4',
      sub_goal_description: 'Each month average of 17K',
      sub_goal_progress: 10,
      sub_goal_is_done: false,
    },
  ];
  const styles = StyleSheet.create({
    rootContainer: {
      marginHorizontal: 10,
    },
    goalContainer: {
      flex: 1,
      backgroundColor: theme.secondary,
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
      color: '#000000',
      marginLeft: 10,
    },
    goalTitleDate: {
      ...getFonts({fontWeight: 'bold'}),
      color: '#000000',
    },
    goalDescriptionContainer: {
      marginLeft: 5,
      marginBottom: 10,
    },
    goalDescriptionText: {
      ...getFonts({fontSize: 16, fontFamily: 'PTSans-Italic'}),
    },
    goalProgressContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    goalProgressBarContainer: {
      width: Dimensions.get('screen').width - 20 - 20 - 50,
      overflow: 'hidden',
      height: 20,
      borderRadius: 20,
      backgroundColor: theme.primary,
    },
    goalProgressBar: {
      flex: 1,
      backgroundColor: 'green',
      width: `${percentage}%`,
    },
    goalProgressPercentage: {
      ...getFonts({fontWeight: '500'}),
    },
    subGoalProgressRootContainer: {},
    subGoalProgressContainer: {
      marginLeft: 30,
      flexDirection: 'row',
      width: 200,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    subGoalProgressBarContainer: {
      overflow: 'hidden',
      width: 50,
      height: 10,
      borderRadius: 20,
      backgroundColor: theme.primary,
      marginRight: 10,
    },
    subGoalProgressBar: {
      flex: 1,
      backgroundColor: 'green',
    },
    subGoalProgressPercentage: {
      alignSelf: 'center',
    },
  });

  return (
    <View style={styles.rootContainer}>
      <View style={styles.goalContainer}>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalTitleText}>Save Money</Text>
          <Text style={styles.goalTitleDate}>Feb_07_24</Text>
        </View>
        <View style={styles.goalDescriptionContainer}>
          <Text style={styles.goalDescriptionText}>"{goalDescription}."</Text>
        </View>
        <View style={styles.goalProgressContainer}>
          <View style={styles.goalProgressBarContainer}>
            <View style={styles.goalProgressBar} />
          </View>
          <Text style={styles.goalProgressPercentage}>{percentage}%</Text>
        </View>
        <View style={styles.subGoalProgressRootContainer}>
          {subGoal.map(goal => {
            return (
              <View style={styles.subGoalProgressContainer}>
                <View style={styles.subGoalProgressBarContainer}>
                  <View
                    style={[
                      styles.subGoalProgressBar,
                      {width: `${goal.sub_goal_progress}%`},
                    ]}
                  />
                </View>
                <Text style={styles.subGoalProgressPercentage}>
                  {goal.sub_goal_title}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Goal;

// goal_id: string;   => NOT DISPLAYED
// user_id: string;   => NOT DISPLAYED
// created_at: string;    => DISPLAYED
// goal_title: string;    => DISPLAYED
// goal_description: string;    => DISPLAYED
// goal_progress: number;   => DISPLAYED
// subGoals: [
// {
//  sub_goal_id: number;
//  sub_goal_title: string;
//  sub_goal_description: string;
//  sub_goal_progress: number;
//  sub_goal_is_done: boolean;
// },
// ];
// is_done: boolean;
