import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {PaperProvider} from 'react-native-paper';
import TabNavigator from './src/navigators/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer
        onReady={() => {
          RNBootSplash.hide();
        }}>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

// C:\Users\kousi\Downloads
