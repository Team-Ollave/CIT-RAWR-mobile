import React from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import dummydata from './dummydata';
import RoomCard from './temporaryComponents/RoomCard';
import CardContent from './temporaryComponents/CardContent';
import SearchInput from './temporaryComponents/SearchInput';
import ExploreMapActionButton from './temporaryComponents/ExploreMapActionButton';
import styles from './styles';

const slug = (string) => string.toLowerCase().replace(' ', '-');

const Section = ({ item: data, index }) => (
  <View
    style={[
      styles.section,
      { marginBottom: index === dummydata.length - 1 ? 32 : 0 },
    ]}
  >
    <Text style={[styles.building, { marginLeft: 16 }]}>{data.building}</Text>
    <View>
      <FlatList
        style={{ overflow: 'visible' }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.rooms}
        ItemSeparatorComponent={() => <View style={{ width: 18 }} />}
        renderItem={({ item, index }) => (
          <RoomCard
            style={{
              marginLeft: index === 0 ? 16 : 0,
              marginRight: index === data.rooms.length - 1 ? 16 : 0,
            }}
          >
            <CardContent item={item} />
          </RoomCard>
        )}
        keyExtractor={(item, index) => `${slug(item.roomname)}-${index}`}
      />
    </View>
  </View>
);

const RoomListViewScreen = () => (
  <View style={styles.container}>
    <View style={[styles.mainContent]}>
      <SearchInput style={{ paddingBottom: 6, paddingHorizontal: 16 }} />
      <FlatList
        style={{ marginTop: 16 }}
        data={dummydata}
        renderItem={Section}
        keyExtractor={(item) => slug(item.building)}
        ItemSeparatorComponent={() => (
          <View style={{ height: 32, zIndex: -1 }} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
    <ExploreMapActionButton />
  </View>
);

export default RoomListViewScreen;
