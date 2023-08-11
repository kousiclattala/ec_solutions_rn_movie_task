import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorList} from './types';
import StackNavigator from './StackNavigator';
import Favourites from '../screens/favourites/Favourites';
import WatchList from '../screens/watchlist/WatchList';
import Profile from '../screens/profile/Profile';
import BottomTab from '../components/BottomTab';

const Tab = createBottomTabNavigator<TabNavigatorList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
