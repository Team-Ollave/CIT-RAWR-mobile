import React from 'react';
import { View, FlatList, Text, StatusBar, TouchableOpacity } from 'react-native';
import dummydata from './dummydata';
import Card from './temporaryComponents/Card';
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
        ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
        renderItem={({ item, index }) => (
          <Card
            style={{
              marginLeft: index === 0 ? 16 : 0,
              marginRight: index === data.rooms.length - 1 ? 16 : 0,
              marginVertical: 8 // para makita ang shadow
            }}
          >
            <CardContent item={item} />
          </Card>
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
          <View style={{ height: 20, zIndex: -1 }} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
    <ExploreMapActionButton />
  </View>
);
export default RoomListViewScreen;