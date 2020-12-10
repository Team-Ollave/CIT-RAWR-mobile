import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ReservationCard from '../../../components/ReservationCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles';

export default function EventsTodayTab({ events }) {
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
