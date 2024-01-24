import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalModal = () => {
  return (
    <View style={styles.container}>
      <Text>GoalModal</Text>
    </View>
  );
};

export default GoalModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
