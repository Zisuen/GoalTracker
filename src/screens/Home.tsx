import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/user';
import supabase from '../service/api';

const Home = () => {
  const dispatch = useDispatch();
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

  const signOutHandler = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.log(error);
      return;
    }
    dispatch(logout());
  };

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
      <TouchableOpacity
        style={{
          backgroundColor: '#ff6060',
          width: 100,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={signOutHandler}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
