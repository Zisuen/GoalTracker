import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import stylesGoal from '~/config/styles/components/GoalTracker/Goal.styles';
import GOAL from '~/config/types/GoalTracker.types';
import GoalModal from './GoalModal';
import SubGoals from './SubGoals';

const defaultGoal: GOAL = {
  goal_id: 'DEFAULT_GOAL',
  user_id: 'DEFAULT_USER',
  created_at: 'Nan 0th 9999',
  goal_title: 'Default',
  goal_description: 'Default descripition.',
  is_done: false,
  goal_type: 'SUB_GOAL',
  sub_goals: [
    {
      sub_goal_id: 'NA',
      sub_goal_title: 'Default',
      sub_goal_description: 'Default',
      sub_goal_type: 'MANUAL',
      sub_goal_target: 99,
      sub_goal_current: 12,
      sub_goal_is_done: false,
    },
  ],
};
const defaultPercentage: PERCENT = {
  primary: 111,
  subs: [111, 222, 333],
};

type PERCENT = {
  primary: number;
  subs: number[];
};

type PROPS = {
  goal: GOAL;
};

const Goal = ({goal}: PROPS) => {
  const [showModal, setShowModal] = useState(false);
  const [percentage, setPercentage] = useState<PERCENT>(defaultPercentage);
  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const getPercentage = (goal: GOAL) => {
    if (goal.goal_type === 'YES_NO') {
      const primaryPercentage = goal.is_done ? 100 : 5;
      setPercentage({primary: primaryPercentage, subs: []});
    }
    if (goal.goal_type === 'MANUAL') {
      const primaryPercentage = goal.goal_current / (goal.goal_target / 100);
      setPercentage({primary: primaryPercentage, subs: []});
    }
    if (goal.goal_type === 'SUB_GOAL') {
    }
  };

  useEffect(() => {
    getPercentage(goal);
  }, []);

  const styles = stylesGoal({percentage: 40});
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.goalContainer} onPress={modalHandler}>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalTitleText}>{goal.goal_title}</Text>
          <Text style={styles.goalTitleDate}>{goal.created_at}</Text>
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
              {percentage.primary}
            </Text>
          </View>
        </View>
        {/*// TODO Implement the SubGoals component ====> <SubGoals goal={goal} /> */}
        {/* {goal.goal_type === 'SUB_GOAL' && (
          <View style={styles.subGoalProgressRootContainer}>
            {goal.sub_goals.map(subGoal => {
              return (
                <View
                  key={subGoal.sub_goal_id}
                  style={styles.subGoalProgressContainer}>
                  <View style={styles.subGoalProgressBarContainer}>
                    <View style={[styles.subGoalProgressBar, {width: `40%`}]} />
                    <Text style={styles.subGoalProgressPercentage}>
                      Default
                    </Text>
                  </View>
                  <Text style={styles.subGoalTitle} numberOfLines={1}>
                    {subGoal.sub_goal_title}
                  </Text>
                </View>
              );
            })}
          </View>
        )} */}
      </TouchableOpacity>
      <GoalModal
        showModal={showModal}
        modalHandler={modalHandler}
        goal={goal}
      />
    </View>
  );
};

export default Goal;
