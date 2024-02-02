import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RootStackParams} from '~/config/types/api.types';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const GoalTracker = ({navigation}: PROPS) => {
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
