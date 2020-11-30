import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
// import dummydata from './dummydata';
import Card from './temporaryComponents/Card';
import CardContent from './temporaryComponents/CardContent';
import SearchInput from './temporaryComponents/SearchInput';
import ExploreMapActionButton from './temporaryComponents/ExploreMapActionButton';
import styles from './styles';
import Axios from 'axios';

const host = 'http://192.168.1.11:8000';

const Section = ({ item, index, rooms, buildings }) => {
  const roomsInThisBuilding = rooms.filter((room) => room.building === item.id);
  return (
    <View
      style={[
        styles.section,
        { marginBottom: index === buildings.length - 1 ? 32 : 0 },
      ]}
    >
      <Text style={[styles.building, { marginLeft: 16 }]}>{item.name}</Text>
      <View>
        <FlatList
          style={{ overflow: 'visible' }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={roomsInThisBuilding}
          ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
          renderItem={({ item, index }) => (
            <Card
              style={{
                marginLeft: index === 0 ? 16 : 0,
                marginRight: index === roomsInThisBuilding.length - 1 ? 16 : 0,
                marginVertical: 8, // para makita ang shadow
              }}
              room={item}
            >
              <CardContent item={item} />
            </Card>
          )}
          keyExtractor={(item) => item.id + ''}
        />
      </View>
    </View>
  );
};

const RoomListViewScreen = () => {
  const [buildings, setBuildings] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    Axios.get(`${host}/api/buildings/`)
      .then((response) => setBuildings(response.data))
      .catch((e) => console.log(e));

    Axios.get(`${host}/api/rooms/`)
      .then((response) => setRooms(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.mainContent]}>
        <SearchInput style={styles.searchInputPadding} />
        <FlatList
          style={styles.flatListMarginTop}
          data={buildings}
          renderItem={({ item, index }) => (
            <Section
              item={item}
              index={index}
              rooms={rooms}
              buildings={buildings}
            />
          )}
          keyExtractor={(item) => item.id + ''}
          ItemSeparatorComponent={() => (
            <View style={{ height: 20, zIndex: -1 }} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <ExploreMapActionButton />
    </View>
  );
};
export default RoomListViewScreen;
