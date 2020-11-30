import React from 'react';
import { View, Text, FlatList, SectionList } from 'react-native';
import ReservationCard from '../../../components/ReservationCard';
import Accordion from '../../../components/Accordion';
import styles from '../styles';

export default function EventsTodayTab({ events }) {
  const uniqueEventDates = [
    ...new Set(events.map((event) => event.event_date)),
  ];

  const formattedData = uniqueEventDates.map((date, index) => ({
    id: index,
    title: new Date(date).toDateString(),
    reservations: events.filter((event) => event.event_date === date),
  }));

  const renderAccordionItem = ({ item, index }) => (
    <Accordion title={item.title} open={index === 0 ? true : false}>
      {item.reservations.map(
        ({
          id,
          event_name: eventName,
          start_time: eventStartTime,
          end_time: eventEndTime,
          requestor_data: {
            profile_data: { display_name: requestorName },
          },
        }) => (
          <ReservationCard
            style={[styles['reservationCard:last-child']]}
            key={id}
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
      data={formattedData}
      renderItem={renderAccordionItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.accordionSeparator} />}
    />
  );
}
