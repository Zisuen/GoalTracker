import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GOAL from '~/config/types/GoalTracker.types';

type PROPS = {
  goal: GOAL;
};

const SubGoals = ({goal}: PROPS) => {
  return goal.goal_type === 'SUB_GOAL' ? (
    <View style={styles.container}>
      <Text>SubGoals</Text>
    </View>
  ) : null;
};

export default SubGoals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
