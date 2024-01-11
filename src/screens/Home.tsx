import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import supabase from '../service/api';

const Home = () => {
  const [fetchError, setFetchError] = useState<null | string>(null);
  const [goals, setGoals] = useState<null | any[]>(null);

  useEffect(() => {
    const fetchGoals = async () => {
      const {data, error} = await supabase.from('goals').select();
      if (error) {
        setFetchError('FetchError');
        setGoals(null);
        console.log(error);
      }
      if (data) {
        setGoals(data);
        setFetchError(null);
      }
    };

    fetchGoals();
  }, []);

  return (
    <View style={{marginTop: 50, marginHorizontal: 20}}>
      <Text>Home</Text>
      {fetchError && <Text>{fetchError}</Text>}
      {goals && (
        <View>
          {goals.map(goal => (
            <Text key={goal.id}>{goal.goal_title}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Home;
