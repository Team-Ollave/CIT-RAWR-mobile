import React from 'react';
import { View, Text } from 'react-native';
import { estyles } from './styles';

const FeaturedRoomsCard = ({
  roomName,
  isAvailable,
  availableStartTime,
  availableEndTime,
}) => {
  return (
    <View style={estyles.container}>
      <View>
        <Text style={estyles.roomName}>{roomName}</Text>
        <Text style={estyles.isAvailableTag}>
          {isAvailable ? 'Available' : 'Not Available'}
        </Text>
      </View>
      <Text style={estyles.availableTime}>
        {availableStartTime} - {availableEndTime}
      </Text>
    </View>
  );
};

export default FeaturedRoomsCard;
