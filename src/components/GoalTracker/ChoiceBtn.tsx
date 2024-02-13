import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import stylesChoiceBtn from '~/config/styles/components/GoalTracker/ChoiceBtn.styles';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {
  label: string;
  isChosen: boolean;
};
const ChoiceBtn = ({label, isChosen}: PROPS) => {
  const styles = stylesChoiceBtn({isChosen});
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.btnLabel}>{label}</Text>
    </View>
  );
};

export default ChoiceBtn;
