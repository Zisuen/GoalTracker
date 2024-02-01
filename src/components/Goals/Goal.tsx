import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {GOAL, SUB_GOAL} from '~/service/api';

type GOAL_PROPS = {
  item: GOAL;
  choosenGoal: (item: SUB_GOAL[]) => void;
};

const Goal = ({item, choosenGoal}: GOAL_PROPS) => {
  const percentage = item.goal_progress;
  const styles = StyleSheet.create({
    goalContainer: {
      backgroundColor: '#b9b9b9',
      marginBottom: 15,
      marginHorizontal: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    goalTitle: {
      fontSize: 20,
      marginBottom: 10,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    progressBarContainer: {
      height: 20,
      width: Dimensions.get('screen').width - 120,
      marginRight: 10,
    },
    progressBar: {
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: 'blue',
    },
  });
  return (
    <TouchableOpacity
      style={styles.goalContainer}
      onPress={() => choosenGoal(item.subGoals)}>
      <Text style={styles.goalTitle}>{item.goal_title}</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
        <Text>{`${percentage}%`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Goal;
