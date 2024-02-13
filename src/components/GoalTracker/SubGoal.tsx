import React from 'react';
import {View, Text} from 'react-native';
import stylesSubGoal from '~/config/styles/components/GoalTracker/SubGoal.styles';
import {SUB_GOAL} from '~/config/types/GoalTracker.types';
import {SUB_PERCENT} from './Goal';

type PROPS = {
  goal: SUB_GOAL;
  goalIndex: number;
  percent: SUB_PERCENT[];
  inModal?: boolean;
};

const SubGoal = ({goal, goalIndex, percent, inModal}: PROPS) => {
  const full = percent[goalIndex]?.full ? percent[goalIndex].full : 0;
  const styles = stylesSubGoal({percentage: full, inModal});
  const renderProgress = () => {
    if (goal.sub_goal_type === 'YES_NO') {
      return `${goal.sub_goal_is_done ? 'Goal done' : 'Goal not done'}`;
    }
    if (goal.sub_goal_type === 'MANUAL') {
      return `${goal.sub_goal_current} out of ${goal.sub_goal_target}`;
    }
    return 'Error';
  };
  return !inModal ? (
    <View key={goal.sub_goal_id} style={styles.subGoalProgressRootContainer}>
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
  ) : (
    <View style={styles.inModalContainer}>
      <View style={styles.inModalTitleContainer}>
        <Text style={styles.inModalTitle}>{goal.sub_goal_title}</Text>
        <Text style={styles.inModalProgressTitle}>{renderProgress()}</Text>
      </View>
      <View style={styles.inModalProgressBarBase}>
        <View style={styles.inModalProgressBar} />
        <Text style={styles.inModalProgress}>{full}%</Text>
      </View>
    </View>
  );
};

export default SubGoal;
