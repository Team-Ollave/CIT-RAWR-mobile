import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import {
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { userContext } from './userContext';
import ViewRoomScreen from './screens/ViewRoomScreen';
import ReservationFormScreen from './screens/ReservationFormScreen';
import MapViewScreen from './screens/MapViewScreen';
import ViewReservationScreen from './screens/ViewReservationScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import ReservationSuccessScreen from './screens/ReservationSuccessScreen';
import Home from './screens/Home';

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <userContext.Provider value={{ user: {} }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Add your screens here */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          {/* <Stack.Screen
            name="RoomListViewScreen"
            component={RoomListViewScreen}
          /> */}
          <Stack.Screen name="RoomListViewScreen" component={Home} />
          <Stack.Screen name="MapViewScreen" component={MapViewScreen} />
          <Stack.Screen name="ViewRoomScreen" component={ViewRoomScreen} />
          <Stack.Screen
            name="ReservationFormScreen"
            component={ReservationFormScreen}
          />
          <Stack.Screen
            name="ViewReservationScreen"
            component={ViewReservationScreen}
          />
          <Stack.Screen
            name="ReservationSuccessScreen"
            component={ReservationSuccessScreen}
          />
        </Stack.Navigator>
      </userContext.Provider>
    </NavigationContainer>
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
