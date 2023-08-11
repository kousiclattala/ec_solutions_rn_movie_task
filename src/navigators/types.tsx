import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type StackNavigatorList = {
  Login: undefined;
  Signup: undefined;
  HomeScreen: undefined;
  WatchList: undefined;
};

export type TabNavigatorList = {
  Home: NavigatorScreenParams<StackNavigatorList>;
  Favourites: undefined;
  Profile: undefined;
};

export type stackProps = StackNavigationProp<StackNavigatorList>;
export type tabProps = BottomTabNavigationProp<TabNavigatorList>;
export type compositeProps = CompositeNavigationProp<stackProps, tabProps>;
