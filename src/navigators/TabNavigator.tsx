import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorList} from './types';
import Favourites from '../screens/favourites/Favourites';
import WatchList from '../screens/watchlist/WatchList';
import Profile from '../screens/profile/Profile';
import BottomTab from '../components/BottomTab';
import Home from '../screens/home/Home';
import {useAppSelector} from '../redux/hooks';

const Tab = createBottomTabNavigator<TabNavigatorList>();

const TabNavigator = () => {
  const {isLoggedIn} = useAppSelector(state => state.auth);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
