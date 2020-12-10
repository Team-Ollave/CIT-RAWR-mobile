import React from 'react';
import { View, Text } from 'react-native';
import PastReservationsTab from './Tabs/PastReservationsTab';
import UpcomingReservationsTab from './Tabs/UpcomingReservationsTab';
import styles from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../../utils/colors';

const Tab = createMaterialTopTabNavigator();

export default function MyReservationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reservations</Text>
      <Tab.Navigator
        style={{ flex: 1 }}
        tabBarOptions={{
          indicatorStyle: styles.tabIndicator,
          labelStyle: styles.tabLabel,
          style: styles.tab,
          activeTintColor: Colors.black,
          inactiveTintColor: Colors.gray3,
          bounces: true,
        }}
      >
        <Tab.Screen name="Upcoming" component={UpcomingReservationsTab} />
        <Tab.Screen name="Past" component={PastReservationsTab} />
      </Tab.Navigator>
    </View>
  );
}
