import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo_transparent.png')}
        />
      </View>
      <Text style={styles.welcomeMessage}>Welcome to CIT-RAWR!</Text>
      <View style={styles.loginContainer}>
        <TextInput style={styles.loginTextInput} placeholder="Email" />
        <TextInput
          style={styles.loginTextInput}
          placeholder="Password"
          secureTextEntry={true}
          password={true}
        />
        <View style={styles.loginButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MapViewScreen')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 4,
    paddingHorizontal: '0.625rem',
    marginBottom: '0.625rem',
    borderWidth: 1,
    borderRadius: '0.5rem',
    height: '2.5rem',
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
    ...Typography.body1('Poppins_400Regular'),
    color: '#ffffff',
  },
  forgotPasswordText: {
    ...Typography.body2('Poppins_400Regular'),
    textAlign: 'center',
  },
});