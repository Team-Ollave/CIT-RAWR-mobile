import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ReservationCard({
  eventName,
  requestorName,
  eventStartTime,
  eventEndTime,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={styles.eventName}>{eventName}</Text>
        <Text style={styles.requestorName}>Reserved by {requestorName}</Text>
      </View>
      <Text style={styles.availableTime}>
        {eventStartTime} - {eventEndTime}
      </Text>
    </View>
  );
}
