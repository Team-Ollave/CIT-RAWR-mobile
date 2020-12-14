import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import NotificationCard from '../../../components/NotificationCard';
import { useNotifications } from '../../../hooks';

const NotificationsScreen = () => {
  const { notifications } = useNotifications();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>
      <View style={styles.notificationsList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notifications}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({
            item: {
              id,
              datetime_created: datetimeCreated,
              reservation_data: reservation,
              is_seen: isSeen,
            },
          }) => (
            <NotificationCard
              notificationId={id}
              roomName={reservation.room_data.name}
              status={reservation.status}
              dateOfReservation={datetimeCreated}
              reservation={reservation}
              isSeen={isSeen}
            />
          )}
        />
      </View>
    </View>
  );
};

export default NotificationsScreen;
