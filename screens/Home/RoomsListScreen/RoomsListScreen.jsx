import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Search from '../../../components/Search';
import ipConfig from '../../../ipConfig';
import styles from './styles';
import RoomCard from '../RoomCard/RoomCard';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

export default function RoomsListScreen() {
  const [isloading, setIsloading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [buildings, setBuildings] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(`${ipConfig}/api/rooms/`)
      .then((res) => setRooms(res.data))
      .catch((err) => console.error(err));

    axios
      .get(`${ipConfig}/api/buildings/`)
      .then((res) => setBuildings(res.data))
      .catch((err) => console.error(err));

    setIsloading(false);
  }, []);

  if (isloading) return <Text>Loading...</Text>;

  const formattedData = buildings?.map((building) => ({
    ...building,
    rooms: rooms?.filter((room) => room.building === building.id),
  }));

  const renderItem = ({ item: building, index }) => (
    <View
      style={{
        marginBottom: index === buildings.length - 1 ? 32 : 0,
        overflow: 'visible',
      }}
    >
      <Text style={[styles.buildingName, { marginLeft: 16 }]}>
        {building.name}
      </Text>
      <FlatList
        horizontal
        data={building.rooms}
        renderItem={({ item, index }) => (
          <RoomCard
            room={item}
            style={{
              marginLeft: index === 0 ? 16 : 0,
              marginRight: index === building.rooms.length - 1 ? 16 : 0,
              marginVertical: 4, // para makita ang shadow
            }}
          />
        )}
        keyExtractor={(item) => item?.id.toString()}
        ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Search />
      <FlatList
        data={formattedData}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MapViewScreen')}
        style={[styles.exploreButton]}
      >
        <Entypo name="location-pin" size={22} color="red" />
        <Text style={styles.exploreLabel}>Explore Map</Text>
      </TouchableOpacity>
    </View>
  );
}
