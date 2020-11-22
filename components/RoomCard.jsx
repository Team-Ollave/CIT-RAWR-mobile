import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FeaturedRoomCard = ({
  id,
  roomName,
  isAvailable,
  roomsAvailable,
  isGeneric,
  availableStartTime,
  availableEndTime,
}) => {
  const roomPluralityText = roomsAvailable > 1 ? 'rooms' : 'room';
  const numberOfRoomsAvailableText = `${roomsAvailable} ${roomPluralityText} available`;
  const isAvailableText = isAvailable ? 'Available' : 'Not Available';

  return (
    <View key={id} style={[styles.container, styles.roomCardContainer]}>
      <View>
        <Text style={styles.roomName}>{roomName}</Text>
        <Text style={styles.isAvailableTag}>
          {isGeneric ? numberOfRoomsAvailableText : isAvailableText}
        </Text>
      </View>
      <Text style={styles.availableTime}>
        {availableStartTime} - {availableEndTime}
      </Text>
    </View>
  );
};

export default FeaturedRoomCard;
