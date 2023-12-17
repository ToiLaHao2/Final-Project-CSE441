/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Homepage from './screens/Homepage';
import Navigator from './Navigator';
import BookingForm from './screens/BookingForm';
import Room from './screens/Room';

function App(): React.JSX.Element {
  return (
    <Room/>
  );
}

export default App;
