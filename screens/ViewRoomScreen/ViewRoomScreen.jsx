import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import EventsTodayTab from './tabs/EventsTodayTab';
import EventsUpcomingTab from './tabs/EventsUpcomingTab';
import { Colors } from '../../utils/colors';

const Tab = createMaterialTopTabNavigator();

export default function ViewRoomScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Text>images</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Case Room</Text>
          <Text style={styles.headerDescription}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: styles.tabIndicator,
            labelStyle: styles.tabLabel,
            style: styles.tab,
            activeTintColor: Colors.accentColor,
            inactiveTintColor: Colors.gray3,
          }}
        >
          <Tab.Screen name="Today" component={EventsTodayTab} />
          <Tab.Screen name="Upcoming" component={EventsUpcomingTab} />
        </Tab.Navigator>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.availabilityLabel}>Earliest Availability:</Text>
          <Text style={styles.availabilityDate}>Tue Jan 12, 2020</Text>
        </View>
        <TouchableOpacity style={styles.reserveButton} activeOpacity={0.8}>
          <Text style={styles.reserveButtonTitle}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
