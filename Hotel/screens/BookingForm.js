import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [livingDays, setLivingDays] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    // Your code to handle the form submission goes here
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Name</Text>
      <Text style={{color: 'black'}}>Room Number</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>
          Arrival Date & Time: {date.getDate()}/{date.getMonth() + 1}/
          {date.getFullYear()} {date.getHours()}:{date.getMinutes()}
        </Text>
        <Button
          title="Open"
          onPress={() => setOpen(true)}
          icon="calendar-account"
          style={styles.btn}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <Button onPress={handleSubmit} style={styles.submit}>
        <Text style={{color: 'white'}}>Submit</Text>
      </Button>
    </View>
  );
};

export default BookingForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  input: {
    color: 'black',
    justifyContent: 'space-between',
  },
  submit: {
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'blue',
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
});
