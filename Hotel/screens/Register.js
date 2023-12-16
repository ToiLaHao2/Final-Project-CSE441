import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import 'react-native-vector-icons';
import * as React from 'react';
import DatePicker from 'react-native-date-picker';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

const Register = () => {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [ssn, setSSN] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{marginTop: 40}}>
        <Text style={styles.title}>Create new account</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.tagBox}>
          <Text style={styles.tagTitle}>
            Name <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagTitle}>
            Date of birth <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.date}>
              {dob.getDate()}/{dob.getMonth() + 1}/{dob.getFullYear()}
            </Text>
            <Button
              mode="outlined"
              style={styles.dateIcon}
              onPress={() => setOpen(true)}>
              <DatePicker
                modal
                open={open}
                date={dob}
                onConfirm={date => {
                  setOpen(false);
                  setDOB(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </Button>
          </View>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagTitle}>
            SSN <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            keyboardType="numeric"
            value={ssn}
            onChangeText={text => setSSN(text)}
            style={styles.textInput}
          />
        </View>
        <Button
          mode="contained"
          // onPress={() => authentication()}
          style={styles.button}>
          <Text style={{color: 'white', fontSize: 18}}> Confirm </Text>
        </Button>
        <View style={{alignItems: 'center', padding: 10}}>
          <Text style={{color: '#0171A3', marginTop: 10, marginBottom: 10}}>
            or you already have an account{' '}
          </Text>
          <Button icon="camera" mode="outlined"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    color: '#418AAA',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tagTitle: {
    color: '#418AAA',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagBox: {
    padding: 10,
  },
  dateIcon: {
    width: 50,
    height: 50,
  },
  textInput: {
    width: 300,
    marginBottom: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    color: '#418AAA',
  },
  date: {
    color: '#418AAA',
    textDecorationLine: 'underline',
    fontSize: 25,
    marginLeft: 20,
  },
  button: {
    height: 50,
    backgroundColor: '#0171A3',
    borderWidth: 0,
    borderRadius: 10,
    justifyContent: 'center',
  },
  register: {
    height: 50,
    color: '#0171A3',
    textDecorationLine: 'underline',
  },
});
export default Register;
