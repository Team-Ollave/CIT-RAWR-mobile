import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import { userContext } from '../../userContext';
import EStyleSheet from 'react-native-extended-stylesheet';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState('');
  const context = useContext(userContext);

  const HandleLogin = async () => {
    try {
      const response = await axios.post(
        'http://192.168.8.113:8000/api/users/login/',
        {
          email: email,
          password: password,
        },
      );
      if (response.status === 200) {
        setError('');
        context.user = response.data;
        console.log(context.user);
        navigation.navigate('RoomListViewScreen');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo_transparent.png')}
        />
      </View>
      <Text style={styles.welcomeMessage}>Welcome to CIT-RAWR!</Text>
      <Text style={styles.errorMessage}>{error}</Text>
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.loginTextInput}
          placeholder="Email"
          value={email}
          onContentSizeChange={() => {
            setButtonDisabled(!(email && password));
          }}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.loginTextInput}
          placeholder="Password"
          secureTextEntry={true}
          password={true}
          value={password}
          onContentSizeChange={() => {
            setButtonDisabled(!(email && password));
          }}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity onPress={HandleLogin} disabled={buttonDisabled}>
          <View
            style={[styles.loginButton, { opacity: buttonDisabled ? 0.7 : 1 }]}
          >
            <Text style={styles.loginButtonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: '15rem',
    width: '15rem',
    alignItems: 'center',
  },
  welcomeMessage: {
    ...Typography.subtitle1('Poppins_400Regular'),
    textAlign: 'center',
    paddingVertical: '1rem',
  },
  loginContainer: {
    paddingHorizontal: '3rem',
  },
  loginTextInput: {
    ...Typography.body2('Poppins_400Regular'),
    color: Colors.black,
    paddingHorizontal: '1rem',
    paddingVertical: '0.4rem',
    marginBottom: '0.625rem',
    borderWidth: 1,
    borderRadius: '0.5rem',
    borderColor: Colors.gray3,
  },
  loginButton: {
    marginVertical: '0.625rem',
    height: '2.5rem',
    backgroundColor: Colors.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
  },
  loginButtonText: {
    ...Typography.body1('Poppins_500Medium'),
    color: '#ffffff',
  },
  forgotPasswordText: {
    ...Typography.body2('Poppins_400Regular'),
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    fontStyle: 'italic',
    height: '1.5rem',
    paddingBottom: '.5rem',
  },
});
