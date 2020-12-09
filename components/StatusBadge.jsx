import { reservationStatusTypes } from '../utils/constants';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Colors } from '../utils/colors';

const StatusBadge = ({ status }) => {
  let labelText = 'Pending';
  let badgeColor = Colors.pendingYellow;

  if (status === reservationStatusTypes.ACCEPTED) {
    labelText = 'Accepted';
    badgeColor = Colors.acceptedGreen;
  } else if (status === reservationStatusTypes.DECLINED) {
    labelText = 'Declined';
    badgeColor = Colors.declinedRed;
  }

  return (
    <View style={[styles.badge, { backgroundColor: badgeColor }]}>
      <Text style={styles.badgeLabel}>{labelText}</Text>
    </View>
  );
};

export default StatusBadge;
