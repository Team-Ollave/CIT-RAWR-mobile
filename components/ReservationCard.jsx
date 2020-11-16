import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../utls/typography';
import { Colors } from '../utls/colors';

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
      <Text>
        {eventStartTime} - {eventEndTime}
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    borderColor: Colors.gray3,
    borderWidth: 1,
  },
  eventName: {
    ...Typography.regular('Poppins_500Medium'),
    color: Colors.black,
  },
  requestorName: {
    ...Typography.extraSmall('Poppins_400Regular'),
    color: Colors.gray4,
  },
});
