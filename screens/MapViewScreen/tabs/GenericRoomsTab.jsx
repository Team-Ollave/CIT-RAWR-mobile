import React, { useContext, useState, useEffect } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import roomsContext from '../roomsContext';
import RoomCard from '../../../components/RoomCard';
import axios from 'axios';

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
  const { genericRooms } = useContext(roomsContext);
  const [roomCategories, setRoomCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.8.113:8000/api/room-categories/')
      .then((response) => {
        setRoomCategories(response.data);
      }, console.error);
  }, []);

  const categoryIDs = genericRooms.map(({ room_category }) => room_category);

  console.log(categoryIDs);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <RoomCard
          roomName={item.genericRoomType}
          roomsAvailable={item.roomsAvailable}
          isGeneric
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
