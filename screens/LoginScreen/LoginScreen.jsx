import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/logo_transparent.png')}
        />
      </View>
      <View style={styles.loginContainer}>
        <TextInput style={styles.loginTextInput} placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          style={styles.loginTextInput}
          placeholder="Password"
        />
        <View style={styles.loginButton}>
          <TouchableOpacity>
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
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '11.25rem',
    width: '11.25rem',
  },
  loginContainer: {
    paddingHorizontal: '3rem',
    alignItems: 'center',
  },
  loginTextInput: {
    width: '100%',
    ...Typography.body2('Poppins_400Regular'),
    paddingHorizontal: '0.5rem',
    marginBottom: '0.625rem',
    height: '2.5rem',
    borderWidth: 1,
    borderRadius: '0.5rem',
  },
  loginButton: {
    width: '100%',
    marginVertical: '0.625rem',
    height: '2.5rem',
    backgroundColor: Colors.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem',
  },
  forgotPasswordContainer: {},
  loginButtonText: {
    ...Typography.body1('Poppins_400Regular'),
    color: '#ffffff',
  },
  forgotPasswordText: {
    ...Typography.body2('Poppins_400Regular'),
  },
});
