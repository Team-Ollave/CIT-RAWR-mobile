import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import ViewRoomScreen from './screens/ViewRoomScreen';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_300Light,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ViewRoomScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

EStyleSheet.build({});
