import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'react-native';
import stylesGoal from '~/config/styles/components/GoalTracker/Goal.styles';
import {GOAL} from '~/config/types/api.types';
import {ThemeContext} from '~/services/context/ThemeContext';
import GoalModal from './GoalModal';

type SUB_GOAL_DATA_BASE = {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
};
type SUB_GOAL_YES_NO_GOAL = SUB_GOAL_DATA_BASE & {
  type: 'YES_NO';
  percentage: number;
};
type SUB_GOAL_MANUAL_GOAL = SUB_GOAL_DATA_BASE & {
  type: 'MANUAL';
  goalTarget: number;
  goalCurrent: number;
  percentage: number;
};
type SUB_GOAL_DATA = SUB_GOAL_YES_NO_GOAL | SUB_GOAL_MANUAL_GOAL;
type GOAL_DATA_BASE = {
  date: string;
  title: string;
  description: string;
  isDone: boolean;
};
type YES_NO_GOAL = GOAL_DATA_BASE & {
  type: 'YES_NO';
  percentage: number;
};
type MANUAL_GOAL = GOAL_DATA_BASE & {
  type: 'MANUAL';
  goalTarget: number;
  goalCurrent: number;
  percentage: number;
};
type SUBGOAL_GOAL = GOAL_DATA_BASE & {
  type: 'SUB_GOAL';
  subGoals: SUB_GOAL_DATA[];
  percentage: number;
};
export type GOAL_DATA = YES_NO_GOAL | MANUAL_GOAL | SUBGOAL_GOAL;

type PROPS = {
  receivedGoal: GOAL;
};
const defaultGoal: GOAL_DATA = {
  date: 'Nan 0th 9999',
  title: 'Default',
  description: 'Default descripition.',
  isDone: false,
  type: 'SUB_GOAL',
  percentage: 99,
  subGoals: [
    {
      id: 'NA',
      title: 'Default',
      description: 'Default',
      type: 'MANUAL',
      goalTarget: 99,
      goalCurrent: 12,
      isDone: false,
      percentage: 0,
    },
  ],
};

export const countPercentage = (goal: SUBGOAL_GOAL): number => {
  if (!goal.subGoals) {
    return 0;
  }
  const each_subGoal_onePercent = 100 / goal.subGoals.length / 100;
  const percentage = goal.subGoals.map(subGoal => {
    if (subGoal.type === 'YES_NO') {
      return (subGoal.isDone ? 100 : 0) * each_subGoal_onePercent;
    }
    if (subGoal.type === 'MANUAL') {
      return (
        (subGoal.goalCurrent / (subGoal.goalTarget / 100)) *
        each_subGoal_onePercent
      );
    }
    return 1;
  });
  return percentage.reduce((a, b) => a + b, 0);
};

const Goal = ({receivedGoal}: PROPS) => {
  const [showModal, setShowModal] = useState(false);
  const [goal, setGoal] = useState<GOAL_DATA>(defaultGoal);

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  const gatherGoalData = (goal: GOAL): GOAL_DATA => {
    const goalBase: GOAL_DATA_BASE = {
      date: goal.created_at,
      title: goal.goal_title,
      description: goal.goal_description,
      isDone: goal.is_done,
    };
    switch (goal.goal_type) {
      case 'YES_NO':
        const yesNoGoal: YES_NO_GOAL = {
          ...goalBase,
          type: 'YES_NO',
          percentage: goal.is_done ? 100 : 0,
        };
        return yesNoGoal;
      case 'MANUAL':
        const manualGoal: MANUAL_GOAL = {
          ...goalBase,
          type: 'MANUAL',
          goalTarget: goal.goal_target,
          goalCurrent: goal.goal_current,
          percentage: goal.goal_current / (goal.goal_target / 100),
        };
        return manualGoal;
      case 'SUB_GOAL':
        const subGoalGoal: SUBGOAL_GOAL = {
          ...goalBase,
          type: 'SUB_GOAL',
          subGoals: goal.sub_goals.map(subGoal => {
            const subBase: SUB_GOAL_DATA_BASE = {
              id: subGoal.sub_goal_id,
              title: subGoal.sub_goal_title,
              description: subGoal.sub_goal_description,
              isDone: subGoal.sub_goal_is_done,
            };
            switch (subGoal.sub_goal_type) {
              case 'YES_NO':
                const yesNoSub: SUB_GOAL_YES_NO_GOAL = {
                  ...subBase,
                  type: 'YES_NO',
                  percentage: subGoal.sub_goal_is_done ? 100 : 0,
                };
                return yesNoSub;
              case 'MANUAL':
                const manualSub: SUB_GOAL_MANUAL_GOAL = {
                  ...subBase,
                  type: 'MANUAL',
                  goalTarget: subGoal.sub_goal_target,
                  goalCurrent: subGoal.sub_goal_current,
                  percentage:
                    subGoal.sub_goal_current / (subGoal.sub_goal_target / 100),
                };
                return manualSub;
            }
          }),
          percentage: goal.goal_type === 'SUB_GOAL' && countPercentage(goal),
        };
        return subGoalGoal;
    }
  };

  useEffect(() => {
    const goalData = gatherGoalData(receivedGoal);
    setGoal(goalData);
  }, [receivedGoal]);

  const styles = stylesGoal({percentage: goal.percentage});

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.goalContainer} onPress={modalHandler}>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalTitleText}>{goal.title}</Text>
          <Text style={styles.goalTitleDate}>{goal.date}</Text>
        </View>
        <View style={styles.goalDescriptionContainer}>
          <Text style={styles.goalDescriptionText}>{goal.description}</Text>
        </View>
        <View style={styles.goalProgressContainer}>
          <View style={styles.goalProgressBarContainer}>
            <View style={styles.goalProgressBar} />
            <Text style={styles.goalProgressPercentage}>
              {goal.type === 'SUB_GOAL'
                ? countPercentage(goal).toPrecision(3)
                : goal.percentage % 10 !== 0
                ? goal.percentage.toPrecision(3)
                : goal.percentage}
            </Text>
          </View>
        </View>
        <View style={styles.subGoalProgressRootContainer}>
          {goal.type === 'SUB_GOAL' &&
            goal.subGoals.map(subGoal => {
              return (
                <View key={subGoal.id} style={styles.subGoalProgressContainer}>
                  <View style={styles.subGoalProgressBarContainer}>
                    <View
                      style={[
                        styles.subGoalProgressBar,
                        {width: `${subGoal.percentage}%`},
                      ]}
                    />
                    <Text style={styles.subGoalProgressPercentage}>
                      {subGoal.type === 'MANUAL'
                        ? `${subGoal.percentage}%`
                        : subGoal.isDone
                        ? 'Done'
                        : 'In progress'}
                    </Text>
                  </View>
                  <Text style={styles.subGoalTitle} numberOfLines={1}>
                    {subGoal.title}
                  </Text>
                </View>
              );
            })}
        </View>
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
