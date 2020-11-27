import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
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
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <RoomCard
          roomName={item.genericRoomType}
          roomsAvailable={item.roomsAvailable}
          isGeneric={true}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return <View style={styles.headerHeight} />;
        }}
        renderItem={renderItem}
        ItemSeparatorComponent={() => (
          <View style={styles.reservationSeparator} />
        )}
      />
    </View>
  );
};

export default GenericRoomsTab;
