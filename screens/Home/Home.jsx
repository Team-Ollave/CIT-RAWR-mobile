import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RoomsListScreen from './RoomsListScreen';
import MyReservationsScreen from './MyReservationsScreen';
import { Colors } from '../../utils/colors';
import { Feather } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const tempt = () => <Text>notifs</Text>;

export default function Home() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        barStyle={styles.barStyle}
        activeColor={Colors.accentColor}
        inactiveColor={Colors.gray4}
      >
        <Tab.Screen
          name="Rooms"
          component={RoomsListScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reservations"
          component={MyReservationsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="calendar" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
