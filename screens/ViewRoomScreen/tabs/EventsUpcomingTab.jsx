import React from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';
import ReservationCard from '../../../components/ReservationCard';
import Accordion from '../../../components/Accordion';
import styles from '../styles';

const data = [
  {
    id: 1,
    title: 'Tomorrow',
    reservations: [
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
    ],
  },
  {
    id: 2,
    title: 'Jan 15, 2020',
    reservations: [
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
    ],
  },
  {
    id: 3,
    title: 'Jan 17, 2020',
    reservations: [
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
    ],
  },
];

export default function EventsTodayTab({ events }) {
  const renderAccordionItem = ({ item, index }) => (
    <Accordion title={item.title} open={index === 0 ? true : false}>
      {item.reservations.map(
        ({ id, eventName, requestorName, eventStartTime, eventEndTime }) => (
          <ReservationCard
            style={[styles['reservationCard:last-child']]}
            key={id.toString()}
            eventName={eventName}
            requestorName={requestorName}
            eventStartTime={eventStartTime}
            eventEndTime={eventEndTime}
          />
        ),
      )}
    </Accordion>
  );

  return (
    <FlatList
      style={{ backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Text style={styles.listTitle}>Events</Text>}
      data={events}
      renderItem={renderAccordionItem}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.accordionSeparator} />}
    />
  );
}
