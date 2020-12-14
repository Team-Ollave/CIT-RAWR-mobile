import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Colors } from '../../../utils/colors';
import styles from './styles';
import NotificationCard from '../../../components/NotificationCard';
import { useUserData } from '../../../userContext';
import axios from 'axios';
import ipConfig from '../../../ipConfig';

const DATA = [
  {
    id: 1,
    roomName: 'Case Room',
    status: 'A',
    dateOfReservation: 'Fri Dec 25, 2020',
  },
  {
    id: 2,
    roomName: 'ST301',
    status: 'D',
    dateOfReservation: 'Sat Dec 26, 2020',
  },
  {
    id: 3,
    roomName: 'ST302',
    status: 'D',
    dateOfReservation: 'Sun Dec 27, 2020',
  },
  {
    id: 4,
    roomName: 'ST303',
    status: 'A',
    dateOfReservation: 'Mon Dec 28, 2020',
  },
];

const NotificationsScreen = ({ navigation }) => {
  const {
    user: { id: userId },
  } = useUserData();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axios
        .get(`${ipConfig}/api/notifications`, { params: { user_id: userId } })
        .then((res) => setNotifications(res.data))
        .catch((err) => console.err(err));
    });

    return unsubscribe;
  }, []);

  const unseen = [];
  const seen = [];

  notifications.forEach((notif) => {
    if (notif.is_seen) seen.push(notif);
    else unseen.push(notif);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>
      <View style={styles.notificationsList}>
        <FlatList
          data={unseen}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({
            item: {
              id,
              datetime_created: datetimeCreated,
              reservation_data: reservation,
            },
          }) => (
            <NotificationCard
              notificationId={id}
              roomName={reservation.room_data.name}
              status={reservation.status}
              dateOfReservation={datetimeCreated}
              reservation={reservation}
              isSeen
            />
          )}
        />
        <FlatList
          data={seen}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({
            item: {
              id,
              datetime_created: datetimeCreated,
              reservation_data: reservation,
            },
          }) => (
            <NotificationCard
              notificationId={id}
              roomName={reservation.room_data.name}
              status={reservation.status}
              dateOfReservation={datetimeCreated}
              reservation={reservation}
            />
          )}
        />
      </View>
    </View>
  );
};

export default NotificationsScreen;
