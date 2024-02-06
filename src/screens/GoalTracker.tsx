import React from 'react';
import {Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '~/config/types/api.types';
import stylesGoalTracker from '~/config/styles/screens/GoalTracker.styles';
import Layout from '~/components/Layout';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const GoalTracker = ({navigation}: PROPS) => {
  const styles = stylesGoalTracker();
  return (
    <Layout navigation={navigation} currentScreen={'Goals'}>
      <Text>Hello</Text>
    </Layout>
  );
};

export default GoalTracker;
