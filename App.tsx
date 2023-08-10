import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Login from './src/screens/login/Login';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <PaperProvider>
      <Login />
    </PaperProvider>
  );
};

export default App;

// C:\Users\kousi\Downloads
