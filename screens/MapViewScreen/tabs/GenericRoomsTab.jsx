import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import RoomCard from '../../../components/RoomCard';

const GenericRoomsTab = ({ navigation }) => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.listTitle}>Classrooms</Text>
    </View>
  );
};

export default GenericRoomsTab;
