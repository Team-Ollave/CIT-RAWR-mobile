import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { useUserData } from '../../../../userContext';
import axios from 'axios';
import ipConfig from '../../../../ipConfig';
import ReservationCard from '../../../../components/ReservationCard';

export default function PastReservationsTab({ navigation }) {
  const [reservations, setReservations] = useState([]);
  const {
    user: { id: userId },
  } = useUserData();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axios
        .get(`${ipConfig}/api/reservations/`, {
          params: { past: true, user_id: userId },
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

  const renderItem = ({ item }) => (
    <>
      <Text style={styles.dateLabel}>{item.title}</Text>
      <FlatList
        style={{ marginTop: 12 }}
        data={item.reservations}
        keyExtractor={(item) => item?.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={({ item }) => (
          <ReservationCard
            eventName={item.event_name}
            eventStartTime={item.start_time}
            eventEndTime={item.end_time}
            requestorName={item.requestor_data.profile_data.display_name}
          />
        )}
      />
    </>
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
