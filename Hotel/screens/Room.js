import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';



function Room ({navigation}) {

  


  return (
    <View style={styles.container}>
      <ScrollView>
       <Text style={{color:'black'}}>Hello</Text>
      </ScrollView>
    </View>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  filter: {
    margin: 20,
    borderColor: '#19a3ff',
    borderWidth: 3,
    borderRadius: 10,
    padding: 10,
  },
  presa: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    borderColor: '#19a3ff',
    borderWidth: 2,
    paddingVertical: 15,
  },
});
