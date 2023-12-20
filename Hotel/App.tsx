/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import Login from './screens/Login';
import Register from './screens/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Homepage from './screens/Homepage';
import Room from './screens/Room';
import BookingForm from './screens/BookingForm';
import EditUser from './screens/EditUser';
import FinalConfirmBooking from './screens/FinalConfirmBooking';
import Notification from './screens/Notification';
import User from './screens/User';
import RoomDetail from './screens/RoomDetail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function App(): React.JSX.Element {
  const [islogin, setIslogin] = useState('');
  const [trigger, setTrigger] = useState(false);
  const Tab = createBottomTabNavigator();

  const getislogin = async () => {
    try {
      const value = await AsyncStorage.getItem('islogin');
      if (value !== null) {
        setIslogin(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getislogin();
  }, [trigger]);

  const Stack = createSharedElementStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            name="RegisterPage"
            options={{headerShown: false}}
            component={Register}
          />
          
          <Stack.Screen
            name="RoomList"
            options={{headerShown: false}}
            component={Room}
          />
          <Stack.Screen
            name="HomeScreen"
            options={{headerShown: false}}
            component={Homepage}
          />
          <Stack.Screen
            name="BookingForm"
            options={{headerShown: false}}
            component={BookingForm}
          />
          <Stack.Screen
            name="EditScreen"
            options={{headerShown: false}}
            component={EditUser}
          />
          <Stack.Screen
            name="FinalConfirmScreen"
            options={{headerShown: false}}
            component={FinalConfirmBooking}
          />
          <Stack.Screen
            name="NotitficationScreen"
            options={{headerShown: false}}
            component={Notification}
          />
          <Stack.Screen
            name="User"
            options={{headerShown: false}}
            component={User}
          />
          <Stack.Screen
            name="RoomDetails"
            options={{headerShown: false}}
            component={RoomDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
