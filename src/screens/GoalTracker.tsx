import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalTracker = () => {
  return (
    <View style={styles.container}>
      <Text>GoalTracker</Text>
    </View>
  );
};

export default GoalTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
