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

export default function EventsTodayTab() {
  const renderItem = ({ item, index }) => (
    <ReservationCard
      style={EStyleSheet.child(styles, 'reservationCard', index, data.length)}
      eventName={item.eventName}
      requestorName={item.requestorName}
      eventStartTime={item.eventStartTime}
      eventEndTime={item.eventEndTime}
    />
  );

  return (
    <FlatList
      style={styles.reservationList}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Text style={styles.listTitle}>Events</Text>}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => (
        <View style={styles.reservationSeparator} />
      )}
    />
  );
}
