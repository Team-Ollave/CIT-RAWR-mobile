import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../utls/typography';
import { Colors } from '../utls/colors';
import ReservationCard from '../components/ReservationCard';

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

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  images: {
    flex: 1,
    maxHeight: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    opacity: 0.3,
  },
  tabsContainer: {
    width: '100%',
    flexDirection: 'row',
    color: 'blue',
    borderBottomColor: Colors.gray2,
    borderBottomWidth: 1,
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.accentColor,
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: '1.5rem',
  },
  header: {
    paddingBottom: '1rem',
    paddingTop: '1.5rem',
    width: '100%',
  },
  headerTitle: {
    ...Typography.title3(),
    color: Colors.black,
  },
  headerDescription: {
    ...Typography.small(),
    color: Colors.gray4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: '0.5rem',
  },
  tabLabel: {
    ...Typography.small('Poppins_400Regular'),
    color: Colors.black,
  },
  tabLabelActive: {
    ...Typography.small('Poppins_500Medium'),
    color: Colors.accentColor,
  },
  tabContent: {
    width: '100%',
    paddingTop: '1.25rem',
  },
  listTitle: {
    ...Typography.small('Poppins_600SemiBold'),
    marginBottom: '0.5rem',
  },
});
