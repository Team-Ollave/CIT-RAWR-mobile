import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles';
import FeaturedRoomCard from '../../../components/FeaturedRoomCard';

const FeaturedRoomsTab = () => {
  return (
    <View style={styles.tabContainer}>
      <FeaturedRoomCard
        roomName={'Case Room'}
        isAvailable={true}
        availableStartTime={'8:00 AM'}
        availableEndTime={'12:00 PM'}
      />
    </View>
  );
};

export default FeaturedRoomsTab;
