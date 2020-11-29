import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles'
const RoomCard = ({ children, style }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('ViewRoomScreen', { roomName: 'Case Room' })
      }
    >
      <View style={[styles.cardContainer, style]}>{children}</View>
    </TouchableOpacity>
  );
};


export default RoomCard;
