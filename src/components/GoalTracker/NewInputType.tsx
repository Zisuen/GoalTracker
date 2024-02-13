import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesNewInputType from '~/config/styles/components/GoalTracker/NewInputType.styles';
import ChoiceBtn from './ChoiceBtn';

type PROPS = {
  chosen: 'YES_NO' | 'MANUAL' | 'SUB_GOALS' | undefined;
  typeHandler: (type: 'YES_NO' | 'MANUAL' | 'SUB_GOALS') => void;
};
const NewInputType = ({chosen, typeHandler}: PROPS) => {
  const styles = stylesNewInputType();
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceLabel}>Choose goal type:</Text>
      <View style={styles.btnsContainer}>
        <TouchableOpacity onPress={() => typeHandler('YES_NO')}>
          <ChoiceBtn label="YES / NO" isChosen={chosen === 'YES_NO'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => typeHandler('MANUAL')}>
          <ChoiceBtn label="MANUAL" isChosen={chosen === 'MANUAL'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => typeHandler('SUB_GOALS')}>
          <ChoiceBtn label="SUB GOALS" isChosen={chosen === 'SUB_GOALS'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewInputType;
