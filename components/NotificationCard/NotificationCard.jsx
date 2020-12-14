import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../utils/colors';
import { reservationStatusTypes } from '../../utils/constants';
import styles from './styles';

const NotificationCard = ({ roomName, status, dateOfReservation }) => {
  const statusLabel =
    status === reservationStatusTypes.ACCEPTED ? 'Accepted' : 'Declined';

  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <Text style={styles.mainText}>
          Your reservation on <Text style={styles.boldText}>{roomName}</Text>{' '}
          has been{' '}
          <Text
            style={[
              {
                color:
                  status === reservationStatusTypes.ACCEPTED
                    ? Colors.acceptedGreen
                    : Colors.declinedRed,
              },
              styles.boldText,
            ]}
          >
            {statusLabel}
          </Text>
          .
        </Text>
        <Text style={styles.dateText}>{dateOfReservation}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
