import React from 'react';
import {ScrollView, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParams} from '~/config/types/api.types';
import stylesGoalTracker from '~/config/styles/screens/GoalTracker.styles';
import Layout from '~/components/Layout';
import Goal from '~/components/GoalTracker/Goal';

type PROPS = {
  navigation: NavigationProp<RootStackParams>;
};

const GoalTracker = ({navigation}: PROPS) => {
  const styles = stylesGoalTracker();
  return (
    <Layout navigation={navigation} currentScreen={'Goals'}>
      <ScrollView contentContainerStyle={styles.listContentContainer}>
        <Text style={styles.text}>Goal TYPE #1</Text>
        <Goal />
      </ScrollView>
    </Layout>
  );
};

export default GoalTracker;
