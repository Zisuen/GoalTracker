import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import Layout from '../components/Layout';
import supabase, {fetchGoals, GOAL, SEND_GOAL} from '../service/api';

const testGoal: SEND_GOAL = {
  goal_title: 'Insert test GOAL',
  goal_description: 'Trying to insert a testGoal into the tablet',
  goal_progress: 7,
  subGoals: [
    {
      subGoal_title: 'SubGoal One',
      subGoal_progress: 17,
      is_done: false,
    },
    {
      subGoal_title: 'SubGoal Two',
      subGoal_progress: 24,
      is_done: false,
    },
  ],
  is_done: false,
};

type GOAL_PROPS = {
  goal: GOAL;
};

const Goal = ({goal}: GOAL_PROPS) => {
  const deleteGoal = async () => {
    const {error} = await supabase
      .from('goals')
      .delete()
      .eq('goal_id', goal.goal_id);
    if (error) {
      throw new Error(error.message);
    }
  };

  return (
    <TouchableOpacity onPress={() => deleteGoal()}>
      <Text>{goal.goal_title}</Text>
    </TouchableOpacity>
  );
};

const Goals = () => {
  const [data, setData] = useState<GOAL[]>([]);

  useEffect(() => {
    const handleFetchGoals = async () => {
      const data: GOAL[] = await fetchGoals();
      if (data) {
        setData(data);
      }
    };

    handleFetchGoals();
  }, []);

  const insertGoal = async () => {
    const {data, error} = await supabase
      .from('goals')
      .insert(testGoal)
      .select();
    if (data) {
      console.log('Inserted data');
    }
    if (error) {
      throw new Error(error.message);
    }
    await fetchGoals();
  };

  return (
    <>
      <Layout>
        <FlatList data={data} renderItem={({item}) => <Goal goal={item} />} />
        <TouchableOpacity
          style={{backgroundColor: 'blue', width: 10, height: 10}}
          onPress={insertGoal}
        />
      </Layout>
    </>
  );
};

export default Goals;
