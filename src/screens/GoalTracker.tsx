import React from 'react';
import {FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {GOAL, RootStackParams} from '~/config/types/api.types';
import stylesGoalTracker from '~/config/styles/screens/GoalTracker.styles';
import Layout from '~/components/Layout';
import Goal from '~/components/GoalTracker/Goal';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const GoalTracker = ({navigation}: PROPS) => {
  const styles = stylesGoalTracker();
  const testGoals: GOAL[] = [
    // YES / NO Goal
    {
      goal_id: 'goal_yes_no',
      user_id: 'testUser1',
      created_at: 'Jan 2nd 2024',
      goal_type: 'YES_NO',
      goal_title: 'Tenerife Trip',
      goal_description: 'In 2024 go to Tenerife to watch the night sky.',
      is_done: false,
    },
    // MANUAL Goal
    {
      goal_id: 'goal_manual',
      user_id: 'testUser1',
      created_at: 'Feb 1st 2024',
      goal_type: 'MANUAL',
      goal_title: 'Save 100K',
      goal_description: 'In 2024, save a total of 100.000 CZK',
      goal_target: 100000,
      goal_current: 10000,
      is_done: false,
    },
    // SUB_GOAL Goal with YES / NO and Manual SubGoals
    {
      goal_id: 'goal_sub_goal',
      user_id: 'testUser1',
      created_at: 'Jan 23rd 2024',
      goal_type: 'SUB_GOAL',
      goal_title: 'Lena Driver',
      goal_description: 'In 2024, make Lenoska into a good driver',
      sub_goals: [
        // SUB_GOAL with MANUAL
        {
          sub_goal_id: 'sub_goal_manual',
          sub_goal_type: 'MANUAL',
          sub_goal_title: 'Mileage',
          sub_goal_description: 'Make lenoska drive 1000km',
          sub_goal_target: 1000,
          sub_goal_current: 100,
          sub_goal_is_done: false,
        },
        // SUB_GOAL with YES/NO
        {
          sub_goal_id: 'sub_goal_yes_no',
          sub_goal_type: 'YES_NO',
          sub_goal_title: 'Like driving',
          sub_goal_description:
            'At the end of the 1000km, does Lenoska like driving ?',
          sub_goal_is_done: false,
        },
        {
          sub_goal_id: 'sub_goal_warea',
          sub_goal_type: 'MANUAL',
          sub_goal_title: 'Mileage',
          sub_goal_description: 'Make lenoska drive 1000km',
          sub_goal_target: 1000,
          sub_goal_current: 220,
          sub_goal_is_done: false,
        },
      ],
      is_done: false,
    },
  ];
  return (
    <Layout navigation={navigation} currentScreen={'Goals'}>
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        data={testGoals}
        renderItem={({item}) => <Goal receivedGoal={item} />}
      />
    </Layout>
  );
};

export default GoalTracker;
