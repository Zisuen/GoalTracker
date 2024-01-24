import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PostgrestError} from '@supabase/supabase-js';
import supabase from '../service/api';
import Layout from '../components/Layout';

type SUB_GOAL = {
  subGoal_title: string;
  is_done: boolean;
  subGoal_progress: number;
};

type GOAL = {
  id?: number;
  created_at?: string;
  goal_title: string;
  goal_description: string;
  is_done: boolean;
  goal_progress: number;
  subGoals: SUB_GOAL[];
};

type FETCH_PROPS = {
  data: GOAL[];
  error: PostgrestError;
};

const ToDo = () => {
  const [fetchedData, setFetchedData] = useState<GOAL[]>();
  const [fetchError, setFetchError] = useState<PostgrestError>();

  useEffect(() => {
    const fetchData = async () => {
      const {data, error}: FETCH_PROPS = await supabase
        .from('goals')
        .select('*');
      if (data) {
        setFetchedData(data);
        console.log('Data has been fetched', data);
      }
      if (error) {
        setFetchError(error);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const testUpload = async () => {
    const testGoal: GOAL = {
      goal_title: 'Save 100K',
      goal_description: 'Description of a goal',
      is_done: false,
      goal_progress: 54,
      subGoals: [
        {
          subGoal_title: 'Save 50K',
          is_done: true,
          subGoal_progress: 100,
        },
        {
          subGoal_title: 'Save 50K',
          is_done: true,
          subGoal_progress: 50,
        },
      ],
    };
    const {data, error} = await supabase.from('goals').insert(testGoal);
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {fetchedData &&
        fetchedData.map(goal => {
          const date = new Date(goal.created_at);
          const options = {year: 'numeric', month: 'short', day: 'numeric'};
          const formattedDate = date.toLocaleDateString('en-GB', options);
          return (
            <View key={goal.id} style={{marginBottom: 20}}>
              <Text>
                ID: {goal.id} = {typeof goal.id}
              </Text>
              <Text>
                Created At: {formattedDate} = {typeof goal.created_at}
              </Text>
              <Text>
                Title: {goal.goal_title} = {typeof goal.goal_title}
              </Text>
              <Text>
                Title: {goal.goal_description} = {typeof goal.goal_title}
              </Text>
              <Text>
                Is Done: {goal.is_done ? 'true' : 'false'} ={' '}
                {typeof goal.is_done}
              </Text>
              <Text>
                Progress: {goal.goal_progress} = {typeof goal.goal_progress}
              </Text>
              {goal.subGoals ? (
                goal.subGoals.map(subGoal => {
                  return (
                    <View style={{marginVertical: 5}}>
                      <Text>{subGoal.subGoal_title}</Text>
                      <Text>{subGoal.is_done ? 'true' : 'false'}</Text>
                      <Text>{subGoal.subGoal_progress}</Text>
                    </View>
                  );
                })
              ) : (
                <Text>No Sub Goals</Text>
              )}
            </View>
          );
        })}
      <TouchableOpacity
        onPress={testUpload}
        style={{
          marginTop: 20,
          marginLeft: 20,
          width: 20,
          height: 20,
          backgroundColor: 'blue',
          borderRadius: 10,
        }}
      />
    </Layout>
  );
};

export default ToDo;
