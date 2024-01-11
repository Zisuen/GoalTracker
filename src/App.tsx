import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {RootState, store} from './redux/store';
import Home from './screens/Home';
import Login from './screens/Login';

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
  const {isLoggedIn} = useSelector((state: RootState) => state.user);
  if (isLoggedIn) {
    return <RootStackNavigator />;
  } else {
    return <LoginStackNavigator />;
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SecurityNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
