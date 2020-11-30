import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import moment from 'moment';

const FeaturedRoomCard = ({
  id,
  roomName,
  isAvailable,
  availableStartTime,
  availableEndTime,
}) => {
  const isAvailableText = isAvailable ? 'Available' : 'Not Available';

  return (
    <View key={id} style={[styles.container, styles.roomCardContainer]}>
      <View style={{ maxWidth: '55%' }}>
        <Text style={styles.roomName} numberOfLines={1}>
          {roomName}
        </Text>
        <Text style={styles.isAvailableTag}>{isAvailableText}</Text>
      </View>
      <Text style={[styles.availableTime]}>
        {moment(availableStartTime, 'HH:mm:ss').format('hh:mm A')} -{' '}
        {moment(availableEndTime, 'HH:mm:ss').format('hh:mm A')}
      </Text>
    </View>
  );
};

export default FeaturedRoomCard;
