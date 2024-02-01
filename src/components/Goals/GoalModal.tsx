import React from 'react';
import {View, Modal, FlatList, TouchableOpacity} from 'react-native';
import {SUB_GOAL} from '~/service/api';
import SubGoal from './SubGoal';

type GoalModal_Props = {
  goal: SUB_GOAL[];
  showModal: boolean;
  handleModal: () => void;
};

const GoalModal = ({goal, showModal, handleModal}: GoalModal_Props) => {
  return (
    <Modal transparent={true} visible={showModal} animationType="slide">
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          bottom: 0,
          width: '100%',
          height: 500,
        }}>
        <FlatList data={goal} renderItem={SubGoal} />
        <TouchableOpacity
          onPress={handleModal}
          style={{
            backgroundColor: 'red',
            width: 20,
            height: 20,
            marginBottom: 100,
            marginLeft: 20,
          }}
        />
      </View>
    </Modal>
  );
};

export default GoalModal;
