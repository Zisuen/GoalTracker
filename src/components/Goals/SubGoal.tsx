import React from 'react';
import {View, Text} from 'react-native';
import {SUB_GOAL} from '~/service/api';

type SubGoal_Props = {
  item: SUB_GOAL;
};
const SubGoal = ({item}: SubGoal_Props) => {
  return (
    <View>
      <Text>{item.subGoal_title}</Text>
      <Text>{item.subGoal_progress}</Text>
    </View>
  );
};

export default SubGoal;
