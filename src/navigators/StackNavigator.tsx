import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigatorList} from './types';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Signup from '../screens/login/Signup';
import WatchList from '../screens/watchlist/WatchList';

const Stack = createStackNavigator<StackNavigatorList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="WatchList" component={WatchList} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
