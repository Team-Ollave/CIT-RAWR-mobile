import React from 'react';
import { Text, View } from 'react-native';
import ReservationCard from '../../components/ReservationCard';
import styles from './styles';

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
    id: 4,
    eventName: 'Event 4',
    requestorName: 'Jane Doe',
    eventStartTime: '8:00',
    eventEndTime: '12:00',
  },
];

export default function ViewRoomScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Text>images</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Case Room</Text>
          <Text style={styles.headerDescription}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <View style={styles.tabsContainer}>
          <View style={[styles.tab, styles.tabActive]}>
            <Text style={[styles.tabLabel, styles.tabLabelActive]}>Today</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabLabel}>Upcoming</Text>
          </View>
        </View>
        <View style={styles.tabContent}>
          <Text style={styles.listTitle}>Events</Text>
          <View>
            {data.map(
              ({
                eventName,
                requestorName,
                eventStartTime,
                eventEndTime,
                id,
              }) => (
                <ReservationCard
                  key={id}
                  eventName={eventName}
                  requestorName={requestorName}
                  eventStartTime={eventStartTime}
                  eventEndTime={eventEndTime}
                />
              ),
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
