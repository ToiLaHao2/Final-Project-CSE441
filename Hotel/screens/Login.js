import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {FIREBASE_AUTH} from '../FirebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MenuProvider} from 'react-native-popup-menu';
import Navigator1 from './MainNavigator';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [logined, setLogined] = useState(false);
  const auth = FIREBASE_AUTH;

  const authentication = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      setLogined(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (logined) {
    return (
      <SafeAreaProvider>
        <MenuProvider>
          <Navigator1 />
        </MenuProvider>
      </SafeAreaProvider>
    );
  } else
    return (
      <View
        style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <View>
          <Text style={styles.welcome}> Welcome to H Hotel </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textTitle}> Login </Text>
          <TextInput
            label={'Email'}
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.textInput}
            mode="outlined"
          />
          <TextInput
            label={'Password'}
            value={password}
            onChangeText={password => setPassword(password)}
            style={styles.textInput}
            mode="outlined"
            secureTextEntry={hidePass ? true : false}
            right={
              <TextInput.Icon
                icon={hidePass ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setHidePass(!hidePass)}
              />
            }
          />
          <Button
            mode="contained"
            onPress={() => authentication()}
            style={styles.button}>
            <Text style={{color: 'white', fontSize: 18}}> Login </Text>
          </Button>
          <Text
            style={{
              color: '#0171A3',
              marginTop: 10,
              marginBottom: 10,
              textAlign: 'center',
            }}>
            or
          </Text>
          <TouchableOpacity
            style={{alignItems: 'center', padding: 10}}
            // onPress={() => this.setState({})}
          >
            <Text style={styles.register}>Sign up now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
  },
  welcome: {
    color: '#19a3ff',
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 50,
  },
  textTitle: {
    color: '#19a3ff',
    fontSize: 40,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: 'silver',
  },
  button: {
    height: 50,
    backgroundColor: '#19a3ff',
    borderRadius: 10,
    justifyContent: 'center',
  },
  register: {
    height: 50,
    color: '#0171A3',
    textDecorationLine: 'underline',
  },
});

export default Login;
