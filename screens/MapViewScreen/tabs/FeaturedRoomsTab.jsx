import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';
import RoomCard from '../../../components/RoomCard';
import { FlatList } from 'react-native-gesture-handler';

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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ViewRoomScreen', { roomName: item.roomName })
        }
      >
        <RoomCard
          roomName={item.roomName}
          isAvailable={item.isAvailable}
          isGeneric={item.isGeneric}
          availableStartTime={item.availableStartTime}
          availableEndTime={item.availableEndTime}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={DATA}
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
