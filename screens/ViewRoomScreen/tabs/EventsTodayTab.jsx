import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ReservationCard from '../../../components/ReservationCard';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from '../styles';

const data = [
  {
    id: 1,
    eventName: 'Event 1',
    requestorName: 'John Doe',
    eventStartTime: '8:00',
    eventEndTime: '12:00',
  },
  {
    id: 2,
    eventName: 'Event 2',
    requestorName: 'Jane Doe',
    eventStartTime: '8:00',
    eventEndTime: '12:00',
  },
  {
    id: 3,
    eventName: 'Event 3',
    requestorName: 'John Doe',
    eventStartTime: '8:00',
    eventEndTime: '12:00',
  },
  {
    id: 5,
    eventName: 'Event 4',
    requestorName: 'Jane Doe',
    eventStartTime: '8:00',
    eventEndTime: '12:00',
  },
  {
    id: 4,
    eventName: 'Event 4',
    requestorName: 'Jane Doe',
    eventStartTime: '8:00',
    eventEndTime: '12:00',
  },
  {
    id: 6,
    eventName: 'Event 4',
    requestorName: 'Jane Doe',
    eventStartTime: '8:00',
    eventEndTime: '12:00',
  },
];

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
      style={EStyleSheet.child(styles, 'reservationCard', index, data.length)}
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
