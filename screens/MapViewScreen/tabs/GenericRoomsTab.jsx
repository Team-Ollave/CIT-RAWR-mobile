import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import FeaturedRoomsCard from '../../../components/FeaturedRoomCard';

const GenericRoomsTab = () => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.listTitle}>Classrooms</Text>
    </View>
  );
};

export default GenericRoomsTab;
