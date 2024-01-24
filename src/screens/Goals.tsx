import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {testGoals, TEST_GOAL, TEST_SUBGOAL} from '../service/testGoals';
import Layout from '../components/Layout';

type GOAL_PROPS = {
  item: TEST_GOAL;
  choosenGoal: (item: TEST_SUBGOAL[]) => void;
};

const Goal = ({item, choosenGoal}: GOAL_PROPS) => {
  const percentage = item.goalProgress;
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
      <Text style={styles.goalTitle}>{item.goalTitle}</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
        <Text>{`${percentage}%`}</Text>
      </View>
    </TouchableOpacity>
  );
};

type GoalModal_Props = {
  goal: TEST_SUBGOAL[];
  showModal: boolean;
  handleModal: () => void;
};
type SubGoal_Props = {
  item: TEST_SUBGOAL;
};
const SubGoal = ({item}: SubGoal_Props) => {
  return (
    <View>
      <Text>{item.subGoalTitle}</Text>
      <Text>{item.subGoalProgress}</Text>
    </View>
  );
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

const Goals = () => {
  const [showModal, setShowModal] = useState(false);
  const [chosenGoal, setChosenGoal] = useState<TEST_SUBGOAL[]>([]);
  const modalHandler = () => {
    setShowModal(!showModal);
  };
  const chooseGoal = (goal: TEST_SUBGOAL[]) => {
    setShowModal(true);
    setChosenGoal(goal);
  };
  return (
    <>
      <Layout>
        <FlatList
          data={testGoals}
          renderItem={({item}) => <Goal item={item} choosenGoal={chooseGoal} />}
        />
      </Layout>
      {chosenGoal && (
        <GoalModal
          showModal={showModal}
          handleModal={modalHandler}
          goal={chosenGoal}
        />
      )}
    </>
  );
};

export default Goals;
