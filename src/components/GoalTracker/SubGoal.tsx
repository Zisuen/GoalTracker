import React from 'react';
import {View, Text} from 'react-native';
import stylesSubGoal from '~/config/styles/components/GoalTracker/SubGoal.styles';
import {SUB_GOAL} from '~/config/types/GoalTracker.types';
import {SUB_PERCENT} from './Goal';

type PROPS = {
  goal: SUB_GOAL;
  goalIndex: number;
  percent: SUB_PERCENT[];
};

const SubGoal = ({goal, goalIndex, percent}: PROPS) => {
  const full = percent[goalIndex]?.full ? percent[goalIndex].full : 0;
  const styles = stylesSubGoal({percentage: full});
  return (
    <View style={styles.subGoalProgressRootContainer}>
      <View key={goal.sub_goal_id} style={styles.subGoalProgressContainer}>
        <View style={styles.subGoalProgressBarContainer}>
          <View style={styles.subGoalProgressBar} />
          <Text style={styles.subGoalProgressPercentage}>
            {percent[goalIndex]?.full}%
          </Text>
        </View>
        <Text style={styles.subGoalTitle} numberOfLines={1}>
          {goal.sub_goal_title}
        </Text>
      </View>
    </View>
  );
};

export default SubGoal;
