import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';

const AUTHENTICATED = false;

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

const LoginStack = createNativeStackNavigator();

const LoginStackNavigator = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

const SecurityNavigator = () => {
  if (AUTHENTICATED) {
    return <RootStackNavigator />;
  } else {
    return <LoginStackNavigator />;
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <SecurityNavigator />
    </NavigationContainer>
  );
};

export default App;
