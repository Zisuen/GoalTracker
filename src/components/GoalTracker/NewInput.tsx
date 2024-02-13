import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import stylesNewInput from '~/config/styles/components/GoalTracker/NewInput.styles';
import {INPUT_HANDLER, INPUT_TARGET} from '~/config/types/AddGoal.types';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {
  inputLabel: string;
  target: INPUT_TARGET;
  getter: string;
  setter: ({text, target}: INPUT_HANDLER) => void;
};

const NewInput = ({inputLabel, target, getter, setter}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesNewInput();
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{inputLabel}</Text>
      <TextInput
        style={styles.input}
        placeholder={`Enter ${inputLabel.toLowerCase()}`}
        placeholderTextColor={theme.placeholderText_secondary}
        value={getter ?? ''}
        onChangeText={text => setter({text, target})}
      />
    </View>
  );
};

export default NewInput;
