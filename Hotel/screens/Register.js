import {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import 'react-native-vector-icons';
import * as React from 'react';
import DatePicker from 'react-native-date-picker';
import {FIREBASE_AUTH, FIREBASE_DB} from '../FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Register({navigation}) {
  const [name, setName] = useState('');
  const [dob, setDOB] = useState(new Date());
  const [ssn, setSSN] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [regis, setRegis] = useState('false');

  const auth = FIREBASE_AUTH;
  const db = FIREBASE_DB;

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(response);
      setRegis('true');
    } catch (error) {
      console.log(error);
      setMessage(error.message);
    }
    if (regis) {
      navigation.navigate('HomeScreen');
    }
  };

  async function AddUser() {
    const id = email;
    const DOB = dob.toString();
    try {
      firestore()
        .collection('user')
        .doc(id)
        .set({
          SSN: {ssn},
          dob: {DOB},
          email: {email},
          name: {name},
        })
        .then(() => {
          console.log(ssn);
        });
      console.log(dob);
    } catch (error) {
      Alert(error.message);
      console.log(error);
    }
  }

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
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
              style={styles.dateIcon}
              onPress={() => setOpen(true)}
              icon="calendar-account">
              <DatePicker
                modal
                open={open}
                date={dob}
                mode="date"
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
        <View style={styles.tagBox}>
          <Text style={styles.tagTitle}>
            Email <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagTitle}>
            Password <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.textInput}
          />
        </View>
        <Button
          mode="contained"
          onPress={() => register()}
          style={styles.button}>
          <Text style={{color: 'white', fontSize: 18}}> Confirm </Text>
        </Button>
        <View style={{alignItems: 'center', padding: 10}}>
          <Text style={{color: '#0171A3', marginTop: 10, marginBottom: 10}}>
            or you already have an account
          </Text>
          <Button
            icon="keyboard-return"
            mode="outlined"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    color: '#19a3ff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tagTitle: {
    color: '#00eeff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagBox: {
    padding: 10,
  },
  dateIcon: {
    borderRadius: 10,
    borderWidth: 1,
    width: 50,
    height: 40,
  },
  textInput: {
    width: 300,
    marginBottom: 20,
    marginLeft: 10,
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
    backgroundColor: '#19a3ff',
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
