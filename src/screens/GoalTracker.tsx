import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '~/services/redux/store';
import {RootStackParams} from '~/config/types/api.types';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const GoalTracker = ({navigation}: PROPS) => {
  const [data, setData] = useState();
  const {email, firstname, birthday, isLoggedIn} = useSelector(
    (state: RootState) => state.user,
  );
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const moveBall = () => {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text>GoalTracker</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Account')}
        style={{
          backgroundColor: '#d9ef76',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#000000',
        }}>
        <Text>Account</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 30}}>Let's learn ANIMATION</Text>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#6e5000',
          }}
        />
      </Animated.View>
      <TouchableOpacity style={{backgroundColor: 'green'}} onPress={moveBall}>
        <Text>MoveBall</Text>
      </TouchableOpacity>
      <Text>{email}</Text>
      <Text>{firstname}</Text>
      <Text>{birthday}</Text>
      <Text>{isLoggedIn ? 'IS_LOGGED_IN' : 'NOT_LOGGED_IN'}</Text>
    </View>
  );
};

export default GoalTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
