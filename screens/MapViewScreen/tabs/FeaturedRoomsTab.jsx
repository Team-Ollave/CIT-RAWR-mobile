import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import RoomCard from '../../../components/RoomCard';

const DATA = [
  {
    id: 1,
    roomName: 'Case Room',
    isAvailable: true,
    isGeneric: false,
    availableStartTime: '1:00 PM',
    availableEndTime: '5:00 PM',
  },
  {
    id: 2,
    roomName: 'Wildcats Innovation Lab',
    isAvailable: false,
    isGeneric: false,
    availableStartTime: '7:00 AM',
    availableEndTime: '12:00 PM',
  },
  {
    id: 3,
    roomName: 'Featured Room 3',
    isAvailable: true,
    isGeneric: false,
    availableStartTime: '8:00 AM',
    availableEndTime: '12:00 PM',
  },
  {
    id: 4,
    roomName: 'Featured Room 4',
    isAvailable: false,
    isGeneric: false,
    availableStartTime: '8:00 AM',
    availableEndTime: '1:00 PM',
  },
];

const FeaturedRoomsTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabContainer}>
      {DATA.map(
        ({
          id,
          roomName,
          isAvailable,
          isGeneric,
          availableStartTime,
          availableEndTime,
        }) => (
          <TouchableOpacity
            key={id}
            onPress={() => navigation.navigate('ViewRoomScreen', { roomName })}
          >
            <RoomCard
              id={id}
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
