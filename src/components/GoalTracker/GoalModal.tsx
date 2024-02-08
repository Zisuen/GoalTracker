import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import getFonts from '~/assets/getFonts';
import {ThemeContext} from '~/services/context/ThemeContext';
import {GOAL_DATA} from './Goal';

type PROPS = {
  showModal: boolean;
  modalHandler: () => void;
  goal: GOAL_DATA;
};

const GoalModal = ({showModal, modalHandler, goal}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  return (
    <Modal
      visible={showModal}
      presentationStyle={'pageSheet'}
      animationType={'slide'}>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.primary,
        }}>
        <Text style={{...getFonts({fontSize: 22}), alignSelf: 'center'}}>
          {goal.title}
        </Text>
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            borderRadius: 13,
            backgroundColor: 'red',
          }}
          onPress={modalHandler}
        />
      </View>
    </Modal>
  );
};

export default GoalModal;
