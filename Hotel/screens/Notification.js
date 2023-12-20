import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-paper';

function Notification({navigation}) {
  useLayoutEffect;
  return (
    <View>
      <Text style={{color: 'black'}}>Notification</Text>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({});
