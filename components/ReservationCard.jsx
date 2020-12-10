import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { formatTime } from '../utils/constants';

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
  subtitle,
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
        <View style={{ flex: 1 }}>
          <Text
            style={[styles.eventName, { maxWidth: '90%' }]}
            numberOfLines={1}
          >
            {eventName}
          </Text>
          <Text style={styles.requestorName}>{subtitle}</Text>
        </View>
        <Text style={styles.availableTime}>
          {formatTime(eventStartTime)} - {formatTime(eventEndTime)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
