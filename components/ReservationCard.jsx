import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ipConfig from '../ipConfig';

export default function ReservationCard({
  eventName,
  requestorName,
  eventStartTime,
  eventEndTime,
  style,
  eventDescription,
  eventDate,
  status,
  roomId,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ViewReservationScreen', {
          eventName,
          requestorName,
          eventStartTime,
          eventEndTime,
          eventDescription,
          eventDate,
          status,
          roomId,
        })
      }
    >
      <View style={[styles.container, style]}>
        <View>
          <Text style={styles.eventName}>{eventName}</Text>
          <Text style={styles.requestorName}>Reserved by {requestorName}</Text>
        </View>
        <Text style={styles.availableTime}>
          {eventStartTime} - {eventEndTime}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
