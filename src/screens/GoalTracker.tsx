import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '~/config/types/api.types';
import stylesGoalTracker from '~/config/styles/screens/GoalTracker.styles';
import Layout from '~/components/Layout';
import Goal from '~/components/GoalTracker/Goal';
import GOAL from '~/config/types/GoalTracker.types';
import {supabase} from '~/services/api';
import AddGoal from '~/components/Icons/AddGoalBtn';
import AddGoalModal from '~/components/GoalTracker/AddGoalModal';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const GoalTracker = ({navigation}: PROPS) => {
  const styles = stylesGoalTracker();
  const [testGoals, setTestGoals] = useState<GOAL[]>();
  const [showAddGoal, setShowAddGoal] = useState<boolean>(false);

  const addGoalHandler = () => {
    setShowAddGoal(!showAddGoal);
  };

  useEffect(() => {
    const getData = async () => {
      const {data, error} = await supabase.from('goals').select('*');
      if (data) {
        setTestGoals(data);
      }
      if (error) {
        console.log('Error while fetching data: ', error.message);
      }
    };
    getData();
  }, []);

  return (
    <Layout navigation={navigation} currentScreen={'Goals'}>
      <FlatList
        contentContainerStyle={styles.listContentContainer}
        data={testGoals}
        renderItem={({item}) => <Goal goal={item} />}
      />
      <TouchableOpacity onPress={addGoalHandler}>
        <AddGoal iconStyle={styles.addGoal} />
      </TouchableOpacity>
      <AddGoalModal showModal={showAddGoal} handleModal={addGoalHandler} />
    </Layout>
  );
};

export default GoalTracker;
