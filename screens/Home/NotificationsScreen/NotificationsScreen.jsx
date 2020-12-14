import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Colors } from '../../../utils/colors';
import styles from './styles';
import NotificationCard from '../../../components/NotificationCard';

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => (
          <NotificationCard
            roomName={item.roomName}
            status={item.status}
            dateOfReservation={item.dateOfReservation}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: Colors.gray1 }} />
        )}
      />
    </View>
  );
};

export default NotificationsScreen;
