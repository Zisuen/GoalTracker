import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import stylesGoalModal from '~/config/styles/components/GoalTracker/GoalModal.styles';
import GOAL from '~/config/types/GoalTracker.types';
import Button from '../Button';
import {PERCENT} from './Goal';
import SubGoal from './SubGoal';

type PROPS = {
  showModal: boolean;
  modalHandler: () => void;
  goal: GOAL;
  percentage: PERCENT;
};

const GoalModal = ({showModal, modalHandler, goal, percentage}: PROPS) => {
  const styles = stylesGoalModal({percentage: percentage.primary});
  const renderProgress = () => {
    if (goal.goal_type === 'YES_NO') {
      return `${goal.is_done ? 'Goal done' : 'Goal not done'}`;
    }
    if (goal.goal_type === 'MANUAL') {
      return `${goal.goal_current} out of ${goal.goal_target}`;
    }
    if (goal.goal_type === 'SUB_GOAL') {
      return `${
        goal.sub_goals.filter(subGoal => subGoal.sub_goal_is_done === true)
          .length
      } out of ${goal.sub_goals.length} sub goals done`;
    }
    return 'Error';
  };
  return (
    <Modal
      visible={showModal}
      presentationStyle={'pageSheet'}
      animationType={'slide'}>
      <ScrollView
        style={styles.rootContainer}
        contentContainerStyle={styles.rootContentContainer}>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalTitle}>{goal.goal_title}</Text>
          <TouchableOpacity style={styles.closeBtn} onPress={modalHandler}>
            <Text style={styles.closeBtnLabel}>Close</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.goalDescriptionText}>
            {goal.goal_description}
          </Text>
        </View>
        <View style={styles.primaryProgressContainer}>
          <Text style={styles.primaryProgressTitle}>
            Status: {renderProgress()}
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
            <Text style={styles.progressBarPercentage}>
              {percentage.primary.toFixed(2)}%
            </Text>
          </View>
        </View>
        {goal.goal_type === 'SUB_GOAL' && (
          <View style={styles.subGoalsContainer}>
            {goal.goal_type === 'SUB_GOAL' &&
              goal.sub_goals.map((subGoal, index) => (
                <SubGoal
                  key={subGoal.sub_goal_id}
                  goal={subGoal}
                  goalIndex={index}
                  percent={percentage.subs}
                  inModal
                />
              ))}
          </View>
        )}
        <View style={styles.btnsContainer}>
          <Button
            btnLabel="Edit"
            pressHandler={() => {}}
            styles={{
              buttonStyle: styles.button,
              labelStyle: styles.buttonLabel,
            }}
          />
          <Button
            btnLabel="Record progress"
            pressHandler={() => {}}
            styles={{
              buttonStyle: styles.button,
              labelStyle: styles.buttonLabel,
            }}
          />
        </View>
        <View style={styles.btnsContainer}>
          <Button
            btnLabel="Remove goal"
            pressHandler={() => {}}
            styles={{
              buttonStyle: styles.deleteButton,
              labelStyle: styles.buttonLabel,
            }}
          />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default GoalModal;
