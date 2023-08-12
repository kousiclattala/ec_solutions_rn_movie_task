import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {PaperProvider} from 'react-native-paper';
import TabNavigator from './src/navigators/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;

// C:\Users\kousi\Downloads
