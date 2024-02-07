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
    {
      goal_id: '1',
      user_id: 'urbanovsk12',
      is_done: false,
      goal_title: 'Save Money',
      created_at: 'Feb 7th 24',
      goal_description:
        'Save more money for the year 2024, making the description longer to handle wrapping on the page',
      goal_type: 'sub_goals',
      sub_goals: [
        {
          sub_goal_id: 1,
          sub_goal_title: '50K to end of Q1',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 2,
          sub_goal_title: '100K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 3,
          sub_goal_title: '150K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
        {
          sub_goal_id: 4,
          sub_goal_title: '200K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
      ],
    },
    {
      goal_id: '2',
      user_id: 'urbanovsk12',
      is_done: false,
      goal_title: 'Save Money',
      created_at: 'Feb 7th 24',
      goal_description:
        'Save more money for the year 2024, making the description longer to handle wrapping on the page',
      goal_type: 'sub_goals',
      sub_goals: [
        {
          sub_goal_id: 1,
          sub_goal_title: '50K to end of Q1',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 2,
          sub_goal_title: '100K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 3,
          sub_goal_title: '150K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
        {
          sub_goal_id: 4,
          sub_goal_title: '200K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
      ],
    },
    {
      goal_id: '1',
      user_id: 'urbanovsk12',
      is_done: false,
      goal_title: 'Save Money',
      created_at: 'Feb 7th 24',
      goal_description:
        'Save more money for the year 2024, making the description longer to handle wrapping on the page',
      goal_type: 'sub_goals',
      sub_goals: [
        {
          sub_goal_id: 1,
          sub_goal_title: '50K to end of Q1',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 2,
          sub_goal_title: '100K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 3,
          sub_goal_title: '150K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
        {
          sub_goal_id: 4,
          sub_goal_title: '200K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
      ],
    },
    {
      goal_id: '1',
      user_id: 'urbanovsk12',
      is_done: false,
      goal_title: 'Save Money',
      created_at: 'Feb 7th 24',
      goal_description:
        'Save more money for the year 2024, making the description longer to handle wrapping on the page',
      goal_type: 'sub_goals',
      sub_goals: [
        {
          sub_goal_id: 1,
          sub_goal_title: '50K to end of Q1',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 2,
          sub_goal_title: '100K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: true,
        },
        {
          sub_goal_id: 3,
          sub_goal_title: '150K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
        {
          sub_goal_id: 4,
          sub_goal_title: '200K to end of Q2',
          sub_goal_description: 'Each month average of 17K',
          sub_goal_is_done: false,
        },
      ],
    },
  ];
  return (
    <Layout navigation={navigation} currentScreen={'Goals'}>
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        data={testGoals}
        renderItem={({item}) => <Goal data={item} />}
      />
    </Layout>
  );
};

export default GoalTracker;
