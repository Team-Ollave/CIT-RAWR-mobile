import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ReservationCard from '../../../components/ReservationCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles';
import axios from 'axios';
import { reservationStatusTypes } from '../../../utils/constants';
import ipConfig from '../../../ipConfig';

export default function EventsTodayTab({
  navigation,
  route: {
    params: { roomId },
  },
}) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      axios
        .get(`${ipConfig}/api/reservations/`, {
          params: {
            status: reservationStatusTypes.ACCEPTED,
            room: roomId,
            today: true,
          },
        })
        .then((res) => setEvents(res.data))
        .catch((err) => console.warn(err));
    });

    return unsubscribe;
  }, []);

  const renderItem = ({
    item: {
      event_name: eventName,
      start_time: eventStartTime,
      end_time: eventEndTime,
      event_description: eventDescription,
      event_date: eventDate,
      room: roomId,
      status,
      requestor_data: {
        profile_data: { display_name: requestorName },
      },
    },
    index,
  }) => (
    <ReservationCard
      style={EStyleSheet.child(styles, 'reservationCard', index, events.length)}
      eventName={eventName}
      requestorName={requestorName}
      eventStartTime={eventStartTime}
      eventEndTime={eventEndTime}
      eventDate={eventDate}
      eventDescription={eventDescription}
      status={status}
      roomId={roomId}
      subtitle={`Reserved by ${requestorName}`}
    />
  );

  return (
    <FlatList
      style={{ backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Text style={styles.listTitle}>Events</Text>}
      data={events}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={styles.reservationSeparator} />
      )}
    />
  );
}
