import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import ReservationCard from '../../../components/ReservationCard';
import Accordion from '../../../components/Accordion';
import styles from '../styles';
import ipConfig from '../../../ipConfig';
import { reservationStatusTypes } from '../../../utils/constants';
import axios from 'axios';

export default function EventsUpcomingTab({
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
            upcoming: true,
            today: false,
          },
        })
        .then((res) => setEvents(res.data))
        .catch((err) => console.warn(err));
    });
    return unsubscribe;
  }, []);

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
          event_description: eventDescription,
          event_date: eventDate,
          room: roomId,
          status,
          requestor_data: {
            profile_data: { display_name: requestorName },
          },
        }) => (
          <ReservationCard
            style={[styles['reservationCard:last-child']]}
            key={id.toString()}
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
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={styles.accordionSeparator} />}
    />
  );
}
