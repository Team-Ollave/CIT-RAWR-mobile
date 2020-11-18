import React from 'react';
import { View, Text } from 'react-native';
import { estyles } from './styles';

const FeaturedRoomsCard = ({
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
    <View style={estyles.container}>
      <View>
        <Text style={estyles.roomName}>{roomName}</Text>
        <Text style={estyles.isAvailableTag}>
          {isGeneric ? numberOfRoomsAvailableText : isAvailableText}
        </Text>
      </View>
      <Text style={estyles.availableTime}>
        {availableStartTime} - {availableEndTime}
      </Text>
    </View>
  );
};

export default FeaturedRoomsCard;
