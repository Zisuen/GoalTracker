import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import stylesGoal from '~/config/styles/components/GoalTracker/Goal.styles';
import GOAL from '~/config/types/GoalTracker.types';
import {formatDate} from '~/services/api';
import GoalModal from './GoalModal';
import SubGoal from './SubGoal';

export type SUB_PERCENT = {
  full: number;
  partial: number;
};
export type PERCENT = {
  primary: number;
  subs: SUB_PERCENT[];
};

type PROPS = {
  goal: GOAL;
};

const Goal = ({goal}: PROPS) => {
  const [showModal, setShowModal] = useState(false);
  const [percentage, setPercentage] = useState<PERCENT>({
    primary: 0,
    subs: [
      {
        full: 0,
        partial: 0,
      },
    ],
  });
  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const getPercentage = (goal: GOAL) => {
    if (goal.goal_type === 'YES_NO') {
      const primaryPercentage = goal.is_done ? 100 : 0;
      setPercentage({
        primary: primaryPercentage,
        subs: [{full: 0, partial: 0}],
      });
    }
    if (goal.goal_type === 'MANUAL') {
      const primaryPercentage = goal.goal_current / (goal.goal_target / 100);
      setPercentage({
        primary: primaryPercentage,
        subs: [{full: 0, partial: 0}],
      });
    }
    if (goal.goal_type === 'SUB_GOAL') {
      const onePercentForEach = 100 / goal.sub_goals.length / 100; // each sub = 0.333 %
      const subPercentage: SUB_PERCENT[] = goal.sub_goals.map(subGoal => {
        if (subGoal.sub_goal_type === 'YES_NO') {
          return subGoal.sub_goal_is_done
            ? {full: 100, partial: 100 * onePercentForEach}
            : {full: 5, partial: 5 * onePercentForEach};
        }
        if (subGoal.sub_goal_type === 'MANUAL') {
          const currentSub =
            subGoal.sub_goal_current / (subGoal.sub_goal_target / 100);
          return {full: currentSub, partial: currentSub * onePercentForEach};
        }
        return {full: 0, partial: 0};
      });
      const primaryPercentage = subPercentage.reduce(
        (total, item) => total + item.partial,
        0,
      );
      setPercentage({primary: primaryPercentage, subs: subPercentage});
    }
  };

  useEffect(() => {
    getPercentage(goal);
  }, []);

  const styles = stylesGoal({percentage: percentage.primary});
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.goalContainer} onPress={modalHandler}>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalTitleText}>{goal.goal_title}</Text>
          <Text style={styles.goalTitleDate}>
            {formatDate(goal.created_at)}
          </Text>
        </View>
        <View style={styles.goalDescriptionContainer}>
          <Text style={styles.goalDescriptionText}>
            {goal.goal_description}
          </Text>
        </View>
        <View style={styles.goalProgressContainer}>
          <View style={styles.goalProgressBarContainer}>
            <View style={styles.goalProgressBar} />
            <Text style={styles.goalProgressPercentage}>
              {percentage && percentage.primary % 1 === 0
                ? percentage?.primary.toFixed(0)
                : percentage?.primary.toFixed(2)}
              %
            </Text>
          </View>
        </View>
        {goal.goal_type === 'SUB_GOAL' &&
          goal.sub_goals.map((goal, index) => (
            <SubGoal
              key={goal.sub_goal_id}
              goal={goal}
              goalIndex={index}
              percent={percentage.subs}
            />
          ))}
      </TouchableOpacity>
      <GoalModal
        showModal={showModal}
        modalHandler={modalHandler}
        goal={goal}
        percentage={percentage}
      />
    </View>
  );
};

export default Goal;
