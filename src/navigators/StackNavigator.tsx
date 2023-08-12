import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigatorList} from './types';
import Login from '../screens/login/Login';
import Signup from '../screens/login/Signup';
import WatchList from '../screens/watchlist/WatchList';
import DetailsScreen from '../screens/moviedetails/DetailsScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator<StackNavigatorList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="WatchList" component={WatchList} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
