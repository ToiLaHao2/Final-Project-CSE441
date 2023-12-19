import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './Homepage';
import Notification from './Notification';
import User from './User';
import {NavigationContainer} from '@react-navigation/native';
import {BottomNavigation, Icon} from 'react-native-paper';
import Login from './Login';
import Register from './Register';
import Room from './Room';
import RoomDetail from './RoomDetail';
import BookingForm from './BookingForm';
import FinalConfirmBooking from './FinalConfirmBooking';
import EditUser from './EditUser';

function Navigator1() {
  const HomeRoute = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ef506b',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen
            name="List-Rooms"
            component={Room}
            options={{title: 'List Rooms'}}
          />
          <Stack.Screen
            name="Room-Detail"
            component={RoomDetail}
            options={{title: 'Room Detail'}}
          />
          <Stack.Screen
            name="Booking"
            component={BookingForm}
            options={{title: 'Booking'}}
          />
          <Stack.Screen
            name="Bill"
            component={FinalConfirmBooking}
            options={{title: 'Bill'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  const LoginRoute = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ef506b',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  const userRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="User"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ef506b',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Edit" component={EditUser} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  const notificationRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Notification"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#ef506b',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {key: 'home', title: 'Home', focusedIcon: 'home'},
      {key: 'notification', title: 'Notification', focusedIcon: 'bell'},
      {key: 'user', title: 'User', focusedIcon: 'person'},
    ]);
  };

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    notification: notificationRoutes,
    user: userRoutes,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      compact={true}
      activeColor="#ef506b"
      renderIcon={({route, focused}) => (
        <Icon
          source={route.focusedIcon}
          color={focused ? '#ef506b' : 'gray'}
          size={30}
        />
      )}
      barStyle={{
        backgroundColor: 'white',
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
      }}
    />
  );
}

export default Navigator1;

const styles = StyleSheet.create({});
