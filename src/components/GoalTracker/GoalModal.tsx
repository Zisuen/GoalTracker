import React, {useContext} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import stylesGoalModal from '~/config/styles/components/GoalTracker/GoalModal.styles';
import {ThemeContext} from '~/services/context/ThemeContext';
import {countPercentage, GOAL_DATA} from './Goal';

type PROPS = {
  showModal: boolean;
  modalHandler: () => void;
  goal: GOAL_DATA;
};

const GoalModal = ({showModal, modalHandler, goal}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesGoalModal();
  return (
    <Modal
      visible={showModal}
      presentationStyle={'pageSheet'}
      animationType={'slide'}>
      <View style={styles.rootContainer}>
        <View style={styles.goalTitleContainer}>
          <Text style={styles.goalTitle}>{goal.title}</Text>
          <TouchableOpacity style={styles.closeBtn} onPress={modalHandler}>
            <Text style={styles.closeBtnLabel}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalModal;
