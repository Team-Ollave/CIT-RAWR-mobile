import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const placeholderImage = [
  {
    key: '1',
    image: 'https://i.stack.imgur.com/y9DpT.jpg',
  },
];

export default function RoomCard({ room, style }) {
  const navigation = useNavigation();

  const roomImage = room.room_images.length
    ? room.room_images[0].image
    : placeholderImage[0].image;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigation.navigate('ViewRoomScreen', room)}
      activeOpacity={0.7}
    >
      <ImageBackground source={{ uri: roomImage }} style={{ flex: 1 }} />
      <LinearGradient
        style={styles.body}
        colors={['transparent', 'rgba(0,0,0, 0.6)']}
      >
        <Text style={styles.roomName} numberOfLines={1}>
          {room.name}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
