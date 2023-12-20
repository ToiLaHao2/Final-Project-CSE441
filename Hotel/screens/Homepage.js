import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Icon, TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function Homepage({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'H Hotel',
      headerTitleStyle: {
        color: '#19a3ff',
        textAlign: 'center',
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: '#616f8d',
        height: 50,
      },
      headerLeft: () => (
        <Icon source="greenhouse" size={40} color="#19a3ff" ma />
      ),
    });
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.midView}>
          <Text style={styles.user}>Hello, User</Text>
        </View>
        <View style={styles.roomList}>
          <View style={styles.room}>
            <ImageBackground
              resizeMode="cover"
              style={styles.roomImage}
              source={{
                uri: 'https://www.chicagoriverhotel.com/wp-content/uploads/sites/9/2017/06/1513-SUITE_CQ_WACKER_0122_White-No-Pattern.jpg?ch=Width,DPR',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#19a3ff', fontSize: 20, marginLeft: 5}}>
                  Standard
                </Text>
                <Icon source="chevron-right" size={30} color="#19a3ff" />
              </View>
            </ImageBackground>
            <TouchableOpacity style={styles.tButton} onPress={()=>navigation.navigate('RoomList')}>
              <Text style={styles.status}>Book now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.room}>
            <ImageBackground
              resizeMode="cover"
              style={styles.roomImage}
              source={{
                uri: 'https://bhgp.bayviewhotels.com/wp-content/uploads/sites/177/2017/09/Superior-Room-King.jpg',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#19a3ff', fontSize: 20, marginLeft: 5}}>
                  Superior
                </Text>
                <Icon source="chevron-right" size={30} color="#19a3ff" />
              </View>
            </ImageBackground>
            <TouchableOpacity style={styles.tButton}>
              <Text style={styles.status}>Book now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.roomList}>
          <View style={styles.room}>
            <ImageBackground
              resizeMode="cover"
              style={styles.roomImage}
              source={{
                uri: 'https://www.theghotel.ie/wp-content/uploads/2020/09/Deluxe-Room.jpg',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#19a3ff', fontSize: 20, marginLeft: 5}}>
                  Deluxe
                </Text>
                <Icon source="chevron-right" size={30} color="#19a3ff" />
              </View>
            </ImageBackground>
            <TouchableOpacity style={styles.tButton}>
              <Text style={styles.status}>Book now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.room}>
            <ImageBackground
              resizeMode="cover"
              style={styles.roomImage}
              source={{
                uri: 'https://cdn.marriottnetwork.com/uploads/sites/24/2021/02/canyon-suites-scottsdale-luxury-collection-king-bedroom.jpg',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#19a3ff', fontSize: 20, marginLeft: 5}}>
                  Suite
                </Text>
                <Icon source="chevron-right" size={30} color="#19a3ff" />
              </View>
            </ImageBackground>
            <TouchableOpacity style={styles.tButton}>
              <Text style={styles.status}>Book now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  midView: {
    padding: 10,
  },
  user: {
    color: '#19a3ff',
    fontSize: 30,
  },
  search: {
    width: 300,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  roomList: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  room: {
    padding: 5,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    width: 160,
    height: 200,
    borderRadius: 10,
  },
  roomImage: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  status: {
    marginLeft: 5,
    fontSize: 20,
    color: 'black',
  },
  tButton: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#19a3ff',
    borderRadius: 10,
    width: 120,
    height: 30,
    justifyContent: 'center',
  },
});
