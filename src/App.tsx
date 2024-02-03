import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';

import Login from './screens/Login';
import GoalTracker from './screens/GoalTracker';
import Account from './screens/Account';
import {RootState, store} from './services/redux/store';
import {
  AuthenticationStackParams,
  RootStackParams,
} from './config/types/api.types';
import ThemeContextProvider from './services/context/ThemeContext';

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParams>();

const AuthenticationStackNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{headerShown: false}}>
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParams>();
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="GoalTracker" component={GoalTracker} />
      <RootStack.Screen name="Account" component={Account} />
    </RootStack.Navigator>
  );
};

const NavigationSwitcher = () => {
  const {isLoggedIn} = useSelector((state: RootState) => state.user);
  if (isLoggedIn) {
    return <RootStackNavigator />;
  } else {
    return <AuthenticationStackNavigator />;
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <NavigationContainer>
          <NavigationSwitcher />
        </NavigationContainer>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
