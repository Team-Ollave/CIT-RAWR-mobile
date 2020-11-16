import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ReservationCard from '../../components/ReservationCard';
import { MaterialIcons } from '@expo/vector-icons';
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

export default function ViewRoomScreen() {
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
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.availabilityText}>Earliest Availability:</Text>
          <Text style={styles.availabilityDate}>Tue Jan 12, 2020</Text>
        </View>
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonTitle}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
