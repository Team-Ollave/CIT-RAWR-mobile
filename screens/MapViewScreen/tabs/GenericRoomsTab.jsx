import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import RoomCard from '../../../components/RoomCard';

const DATA = [
  {
    id: 1,
    genericRoomType: 'Classrooms',
    roomsAvailable: 2,
  },
  {
    id: 2,
    genericRoomType: 'Computer Laboratories',
    roomsAvailable: 5,
  },
  {
    id: 3,
    genericRoomType: 'Engineering Laboratories',
    roomsAvailable: 3,
  },
  {
    id: 4,
    genericRoomType: 'Science Laboratories',
    roomsAvailable: 1,
  },
];

const GenericRoomsTab = ({ navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {DATA.map(({ id, genericRoomType, roomsAvailable }) => (
        <TouchableOpacity key={id}>
          <RoomCard
            id={id}
            roomName={genericRoomType}
            roomsAvailable={roomsAvailable}
            isGeneric
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GenericRoomsTab;
