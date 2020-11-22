import React from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import dummydata from './dummydata';
import RoomCard from './temporaryComponents/RoomCard';
import CardContent from './temporaryComponents/CardContent';
import SearchInput from './temporaryComponents/SearchInput';
import ExploreMapActionButton from './temporaryComponents/ExploreMapActionButton';
import styles from './styles';

const slug = (string) => string.toLowerCase().replace(' ', '-');

const Section = ({ item }) => (
  <View style={styles.section}>
    <Text style={styles.building}>{item.building}</Text>
    <View>
      <FlatList
        horizontal
        data={item.rooms}
        renderItem={({ item }) => (
          <RoomCard>
            <CardContent item={item} />
          </RoomCard>
        )}
        keyExtractor={(item, index) => `${slug(item.roomname)}-${index}`}
      />
    </View>
  </View>
);

const RoomListViewScreen = () => (
  <View
    style={{
      marginTop: StatusBar.currentHeight,
      flex: 1,
      justifyContent: 'space-between',
    }}
  >
    <SearchInput />
    <View style={styles.mainContent}>
      <FlatList
        data={dummydata}
        renderItem={Section}
        keyExtractor={(item) => slug(item.building)}
      />
    </View>
    <ExploreMapActionButton />
  </View>
);

export default RoomListViewScreen;
