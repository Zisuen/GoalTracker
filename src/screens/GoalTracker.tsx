import {NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {RootStackParams} from '~/config/types/api.types';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const GoalTracker = ({navigation}: PROPS) => {
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
    </View>
  );
};

export default GoalTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
