import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import stylesAddGoalModal from '~/config/styles/components/GoalTracker/AddGoalModal.styles';
import {INPUT_HANDLER, NEW_GOAL} from '~/config/types/AddGoal.types';
import CloseBtn from '../Icons/CloseBtn';
import NewInput from './NewInput';
import NewInputType from './NewInputType';

type PROPS = {
  showModal: boolean;
  handleModal: () => void;
};

const AddGoalModal = ({showModal, handleModal}: PROPS) => {
  const [goalType, setGoalType] = useState<'YES_NO' | 'MANUAL' | 'SUB_GOALS'>();
  const [newGoal, setNewGoal] = useState<NEW_GOAL>({
    goal_title: '',
    goal_description: '',
    goal_type: null,
    goal_target: null,
    goal_current: null,
    sub_goals: null,
    is_done: false,
  });

  const inputHandler = ({text, target}: INPUT_HANDLER) => {
    setNewGoal({
      ...newGoal,
      [target]: text,
    });
  };

  const typeHandler = (type: 'YES_NO' | 'MANUAL' | 'SUB_GOALS') => {
    setGoalType(type);
  };

  const styles = stylesAddGoalModal();
  return (
    <Modal
      visible={showModal}
      presentationStyle={'overFullScreen'}
      animationType={'fade'}>
      <View style={styles.rootContainer}>
        <Text style={styles.title}>Add new goal</Text>
        <TouchableOpacity onPress={handleModal} style={styles.closeBtn}>
          <CloseBtn btnStyle={styles.closeBtn} />
        </TouchableOpacity>
        <ScrollView style={styles.labelContainer}>
          <NewInput
            inputLabel="Goal title"
            target="goal_title"
            getter={newGoal.goal_title}
            setter={inputHandler}
          />
          <NewInput
            inputLabel="Goal description"
            target="goal_description"
            getter={newGoal.goal_description}
            setter={inputHandler}
          />
          <NewInputType chosen={goalType} typeHandler={typeHandler} />
          {goalType === 'YES_NO' && (
            <Text style={styles.additionalInformationText}>
              No additional information required
            </Text>
          )}
          {goalType === 'MANUAL' && (
            <>
              <Text style={styles.additionalInformationText}>
                Additional information
              </Text>
              <NewInput
                inputLabel="Goal target"
                target="goal_target"
                getter={newGoal.goal_target}
                setter={inputHandler}
              />
              <NewInput
                inputLabel="Current progress"
                target="goal_current"
                getter={newGoal.goal_current}
                setter={inputHandler}
              />
            </>
          )}
          {goalType === 'SUB_GOALS' && (
            <Text style={styles.additionalInformationText}>SubGoals</Text>
          )}
          <View style={{backgroundColor: '#34bcae', marginTop: 20}}>
            <Text>{newGoal.goal_title}</Text>
            <Text>{newGoal.goal_description}</Text>
            <Text>{goalType}</Text>
            <Text>{newGoal.goal_target}</Text>
            <Text>{newGoal.goal_current}</Text>
            <Text>{newGoal.sub_goals?.length}</Text>
            <Text>{newGoal.is_done ? 'DONE' : 'NOT DONE'}</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default AddGoalModal;
