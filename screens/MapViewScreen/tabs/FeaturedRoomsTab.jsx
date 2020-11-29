import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import RoomCard from '../../../components/RoomCard';
import { FlatList } from 'react-native-gesture-handler';
import roomsContext from '../roomsContext';

const FeaturedRoomsTab = () => {
  const navigation = useNavigation();
  const { featuredRooms } = useContext(roomsContext);

  const renderItem = ({ item }) => {
    const {
      name: roomName,
      is_generic: isGeneric,
      available_start_time: availableStartTime,
      available_end_time: availableEndTime,
    } = item;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ViewRoomScreen', item)}
      >
        <RoomCard
          roomName={roomName}
          isAvailable
          isGeneric={isGeneric}
          availableStartTime={availableStartTime}
          availableEndTime={availableEndTime}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={featuredRooms}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
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

export default FeaturedRoomsTab;
