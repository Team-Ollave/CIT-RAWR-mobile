import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ipConfig from '../../ipConfig';
import { Colors } from '../../utils/colors';
import { reservationStatusTypes } from '../../utils/constants';
import styles from './styles';

const NotificationCard = ({
  notificationId,
  roomName,
  status,
  dateOfReservation,
  isSeen,
  reservation,
}) => {
  const navigation = useNavigation();

  const statusLabel =
    status === reservationStatusTypes.ACCEPTED ? 'Accepted' : 'Declined';

  const handleOnPress = () => {
    navigation.navigate('ViewReservationScreen', {
      eventName: reservation.event_name,
      requestorName: reservation.requestor_data.profile_data.display_name,
      eventStartTime: reservation.start_time,
      eventEndTime: reservation.end_time,
      eventDescription: reservation.event_description,
      eventDate: reservation.event_date,
      status,
      roomId: reservation.room_data.id,
    });

    if (!isSeen) {
      axios.patch(`${ipConfig}/api/notifications/${notificationId}/`, {
        is_seen: true,
      });
    }
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={[styles.cardContainer, !isSeen ? styles.notSeen : {}]}>
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
