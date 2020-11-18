import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FeaturedRoomCard = () => ({
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
    <View style={styles.container}>
      <View>
        <Text style={estyles.roomName}>{roomName}</Text>
        <Text style={estyles.isAvailableTag}>
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
