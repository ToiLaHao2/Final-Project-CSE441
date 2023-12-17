import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './screens/Homepage';
import Notification from './screens/Notification';
import User from './screens/User';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-paper';

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon source="home" size={30} color="#19a3ff" />
              ) : (
                <Icon source="home" size={30} color="#616f8d" />
              ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon source="bell" size={30} color="#19a3ff" />
              ) : (
                <Icon source="bell" size={30} color="#616f8d" />
              ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Icon source="account" size={30} color="#19a3ff" />
              ) : (
                <Icon source="account" size={30} color="#616f8d" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
