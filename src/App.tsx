import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/Login';
import GoalTracker from './screens/GoalTracker';
import Account from './screens/Account';
import {NavigationContainer} from '@react-navigation/native';

type AuthenticationStackParams = {
  Login: undefined;
};
const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParams>();

const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationStack.Navigator>
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};

type RootStackParams = {
  GoalTracker: undefined;
  Account: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParams>();
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="GoalTracker" component={GoalTracker} />
      <RootStack.Screen name="Account" component={Account} />
    </RootStack.Navigator>
  );
};

const App = () => {
  const isLoggedIn: boolean = true;
  const navigationSwitcher = () => {
    if (isLoggedIn) {
      return <RootStackNavigator />;
    } else {
      return <AuthenticationStackNavigator />;
    }
  };
  return <NavigationContainer>{navigationSwitcher()}</NavigationContainer>;
};

export default App;
