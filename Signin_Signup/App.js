/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, LogBox} from 'react-native';
import Routes from './src/Navigations/Route';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {getUserData} from './src/utils/utils';
import {saveUserData} from './src/redux/actions/auth';

const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);

  useEffect(() => {
    (async () => {
      const userData = await getUserData();
      console.log('user data App.js', userData);
    })();
  }, []);

  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
