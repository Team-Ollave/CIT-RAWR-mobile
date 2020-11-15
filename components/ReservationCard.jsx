import React from 'react';
import { View, Text } from 'react-native';
import { estyles } from './styles';

export default function ReservationCard({
  eventName,
  requestorName,
  eventStartTime,
  eventEndTime,
}) {
  return (
    <View style={estyles.container}>
      <View>
        <Text style={estyles.eventName}>{eventName}</Text>
        <Text style={estyles.requestorName}>Reserved by {requestorName}</Text>
      </View>
      <Text>
        {eventStartTime} - {eventEndTime}
      </Text>
    </View>
  );
}
