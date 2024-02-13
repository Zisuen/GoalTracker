import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import stylesAddGoalModal from '~/config/styles/components/GoalTracker/AddGoalModal.styles';
import CloseBtn from '../Icons/CloseBtn';
import NewInput from './NewInput';
import NewInputType from './NewInputType';
import NewSubGoal from './NewSubGoal';
import {INPUT_HANDLER} from '~/config/types/AddGoal.types';
import {v4 as uuidv4} from 'uuid';
import 'react-native-get-random-values';

type PROPS = {
  showModal: boolean;
  handleModal: () => void;
};
type SUB_GOAL_YES_NO = {
  sub_goal_id: string;
  sub_goal_title: string;
  sub_goal_description: string;
  sub_goal_type: 'YES_NO';
  sub_goal_is_done: boolean;
};
type SUB_GOAL_MANUAL = {
  sub_goal_id: string;
  sub_goal_title: string;
  sub_goal_description: string;
  sub_goal_type: 'MANUAL';
  sub_goal_target: string;
  sub_goal_current: string;
  sub_goal_is_done: boolean;
};
export type SUB_GOAL = SUB_GOAL_YES_NO | SUB_GOAL_MANUAL;
export type GOAL_TYPE = 'YES_NO' | 'MANUAL' | 'SUB_GOALS';
type NEW_GOAL_YES_NO = {
  goal_title: string;
  goal_description: string;
  goal_type: 'YES_NO';
  is_done: boolean;
};
type NEW_GOAL_MANUAL = {
  goal_title: string;
  goal_description: string;
  goal_type: 'MANUAL';
  goal_target: string;
  goal_current: string;
  is_done: boolean;
};
type NEW_GOAL_SUB_GOALS = {
  goal_title: string;
  goal_description: string;
  goal_type: 'SUB_GOALS';
  sub_goals: SUB_GOAL[];
  is_done: boolean;
};
type NEW_GOAL = NEW_GOAL_YES_NO | NEW_GOAL_MANUAL | NEW_GOAL_SUB_GOALS;

const AddGoalModal = ({showModal, handleModal}: PROPS) => {
  const [newGoal, setNewGoal] = useState<NEW_GOAL>({
    goal_title: '',
    goal_description: '',
    goal_type: 'YES_NO',
    is_done: false,
  });
  const typeHandler = (type: GOAL_TYPE) => {
    if (type === 'YES_NO') {
      setNewGoal({...newGoal, goal_type: type});
    }
    if (type === 'MANUAL') {
      setNewGoal({
        ...newGoal,
        goal_type: type,
        goal_target: '',
        goal_current: '',
      });
    }
    if (type === 'SUB_GOALS') {
      setNewGoal({
        ...newGoal,
        goal_type: 'SUB_GOALS',
        sub_goals: [
          {
            sub_goal_id: uuidv4(),
            sub_goal_title: '',
            sub_goal_description: '',
            sub_goal_type: 'YES_NO',
            sub_goal_is_done: false,
          },
        ],
      });
    }
  };
  const inputHandler = ({text, target}: INPUT_HANDLER) => {
    setNewGoal({...newGoal, [target]: text});
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
          <NewInputType chosen={newGoal.goal_type} typeHandler={typeHandler} />
          {newGoal.goal_type === 'YES_NO' && (
            <Text style={styles.additionalInformationText}>
              No additional information required
            </Text>
          )}
          {newGoal.goal_type === 'MANUAL' && (
            <>
              <Text style={styles.additionalInformationText}>
                Additional information
              </Text>
              <NewInput
                inputLabel="Goal target"
                target="goal_target"
                getter={newGoal.goal_target ? newGoal.goal_target : ''}
                setter={inputHandler}
              />
              <NewInput
                inputLabel="Current progress"
                target="goal_current"
                getter={newGoal.goal_current ? newGoal.goal_current : ''}
                setter={inputHandler}
              />
            </>
          )}
          {newGoal.goal_type === 'SUB_GOALS' && (
            <>
              <Text style={styles.additionalInformationText}>SubGoals</Text>
              {newGoal.sub_goals.length > 0 &&
                newGoal.sub_goals.map((goal, index) => <NewSubGoal />)}
            </>
          )}
          <View style={{backgroundColor: '#34bcae', marginTop: 20}}>
            <Text>{newGoal.goal_title}</Text>
            <Text>{newGoal.goal_description}</Text>
            <Text>{newGoal.goal_type}</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default AddGoalModal;
