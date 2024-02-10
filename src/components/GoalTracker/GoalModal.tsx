import React, {useContext} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import stylesGoalModal from '~/config/styles/components/GoalTracker/GoalModal.styles';
import GOAL from '~/config/types/GoalTracker.types';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {
  showModal: boolean;
  modalHandler: () => void;
  goal: GOAL;
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
          <Text style={styles.goalTitle}>Goal Title</Text>
          <TouchableOpacity style={styles.closeBtn} onPress={modalHandler}>
            <Text style={styles.closeBtnLabel}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalModal;
