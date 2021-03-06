import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { useUserData } from '../../../../userContext';
import axios from 'axios';
import ipConfig from '../../../../ipConfig';
import ReservationCard from '../../../../components/ReservationCard';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function UpcomingReservationsTab({ navigation }) {
  const [reservations, setReservations] = useState([]);
  const {
    user: { id: userId },
  } = useUserData();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axios
        .get(`${ipConfig}/api/reservations/`, {
          params: { upcoming: true, user_id: userId },
        })
        .then((res) => setReservations(res.data))
        .catch((err) => console.error(err));
    });

    return unsubscribe;
  }, [navigation]);

  const uniqueEventDates = [
    ...new Set(reservations?.map((reservation) => reservation.event_date)),
  ];

  const formattedData = uniqueEventDates.map((date, index) => ({
    id: index,
    title: new Date(date).toDateString(),
    reservations: reservations?.filter(
      (reservation) => reservation.event_date === date,
    ),
  }));

  const renderItem = ({ item, index }) => (
    <View
      style={EStyleSheet.child(styles, 'section', index, formattedData.length)}
    >
      <Text style={styles.dateLabel}>{item.title}</Text>
      <FlatList
        style={{ marginTop: 8 }}
        data={item.reservations}
        keyExtractor={(item) => item?.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <ReservationCard
            eventName={item.event_name}
            eventStartTime={item.start_time}
            eventEndTime={item.end_time}
            requestorName={item.requestor_data.profile_data.display_name}
            eventDate={item.event_date}
            eventDescription={item.event_description}
            status={item.status}
            roomId={item.room}
            subtitle={item?.room_data.name}
          />
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={formattedData}
        keyExtractor={(item) => item?.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
