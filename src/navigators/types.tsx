import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreenStackProps} from 'react-native-screens';

export type StackNavigatorList = {
  Login: undefined;
  Signup: undefined;
  WatchList: undefined;
  DetailsScreen: {
    movieId: number;
  };
  HomeScreen: NavigatorScreenParams<TabNavigatorList>;
};

export type TabNavigatorList = {
  Home: undefined;
  Favourites: undefined;
  Profile: undefined;
};

export type stackProps = StackNavigationProp<StackNavigatorList>;
export type tabProps = BottomTabNavigationProp<TabNavigatorList>;
export type compositeProps = CompositeNavigationProp<stackProps, tabProps>;

export type detailsRouteProps = RouteProp<StackNavigatorList, 'DetailsScreen'>;
