import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Button, Menu, TextInput} from 'react-native-paper';

const Login = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [logined, setLogined] = useState(false);

  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
      <View>
        <Text style={styles.welcome}> Welcome to H Hotel </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}> Login </Text>
        <TextInput
          keyboardType="numeric"
          label={'Phone'}
          value={text}
          onChangeText={text => setText(text)}
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
          // onPress={() => authentication()}
          style={styles.button}>
          <Text style={{color: 'white', fontSize: 18}}> Login </Text>
        </Button>
        <TouchableOpacity style={{alignItems: 'center', padding: 10}}>
          <Text style={{color: '#0171A3', marginTop: 10, marginBottom: 10}}>
            or{' '}
          </Text>
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
    color: '#419AAA',
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 50,
  },
  textTitle: {
    color: '#418AAA',
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
    backgroundColor: '#0171A3',
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
