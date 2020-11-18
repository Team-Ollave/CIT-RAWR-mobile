import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import RoomCard from '../../../components/RoomCard';

const DATA = [
  {
    roomName: 'Case Room',
    isAvailable: true,
    isGeneric: false,
    availableStartTime: '1:00 PM',
    availableEndTime: '5:00 PM',
  },
  {
    roomName: 'Wildcats Innovation Lab',
    isAvailable: false,
    isGeneric: false,
    availableStartTime: '7:00 AM',
    availableEndTime: '12:00 PM',
  },
  {
    roomName: 'Featured Room 3',
    isAvailable: true,
    isGeneric: false,
    availableStartTime: '8:00 AM',
    availableEndTime: '12:00 PM',
  },
  {
    roomName: 'Featured Room 4',
    isAvailable: false,
    isGeneric: false,
    availableStartTime: '8:00 AM',
    availableEndTime: '1:00 PM',
  },
  {
    roomName: 'Featured Room 5',
    isAvailable: true,
    isGeneric: false,
    availableStartTime: '9:00 AM',
    availableEndTime: '12:00 PM',
  },
];

const FeaturedRoomsTab = ({ navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {DATA.map(
        (
          roomName,
          isAvailable,
          isGeneric,
          availableStartTime,
          availableEndTime,
        ) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewRoomScreen', { roomName })}
          >
            <RoomCard
              roomName={roomName}
              isAvailable={isAvailable}
              isGeneric={isGeneric}
              availableStartTime={availableStartTime}
              availableEndTime={availableEndTime}
            />
          </TouchableOpacity>
        ),
      )}
    </View>
  );
};

export default FeaturedRoomsTab;
