import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RoomsListScreen from './RoomsListScreen';
import MyReservationsScreen from './MyReservationsScreen';
import NotificationsScreen from './NotificationsScreen';
import { Colors } from '../../utils/colors';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import ipConfig from '../../ipConfig';
import { useUserData } from '../../userContext';

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  const [notificationsCount, setNotificationsCount] = useState(null);
  const {
    user: { id: userId },
  } = useUserData();

  useEffect(() => {
    const loop = setInterval(() => {
      axios
        .get(`${ipConfig}/api/notifications/count/`, {
          params: { is_seen: false, user_id: userId },
        })
        .then((res) => setNotificationsCount(res.data))
        .catch((err) => console.error(err));
    }, 1000);

    return () => clearInterval(loop);
  }, []);

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
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="bell" size={20} color={color} />
            ),
            tabBarBadge: notificationsCount ? notificationsCount : null,
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
