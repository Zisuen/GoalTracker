import React, {useContext} from 'react';
import {Text, View, ViewStyle} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import stylesAddGoal from '~/config/styles/components/Icons/AddGoal.styles';
import {ThemeContext} from '~/services/context/ThemeContext';

type PROPS = {
  iconStyle: ViewStyle;
};
const AddGoal = ({iconStyle}: PROPS) => {
  const {theme} = useContext(ThemeContext);
  const styles = stylesAddGoal();
  return (
    <View style={iconStyle}>
      <View style={styles.buttonContainer}>
        <MCIcon name="note-plus" size={28} color={theme.text_inverse} />
        <Text style={styles.buttonLabel}>Add goal</Text>
      </View>
    </View>
  );
};

export default AddGoal;
