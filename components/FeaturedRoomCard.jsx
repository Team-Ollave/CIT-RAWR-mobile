import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default FeaturedRoomsCard = ({
  roomName,
  isAvailable,
  availableStartTime,
  availableEndTime,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.roomName}>{roomName}</Text>
        <Text style={styles.isAvailableTag}>
          {isAvailable ? 'Available' : 'Not Available'}
        </Text>
      </View>
      <Text style={styles.availableTime}>
        {availableStartTime} - {availableEndTime}
      </Text>
    </View>
  );
};
