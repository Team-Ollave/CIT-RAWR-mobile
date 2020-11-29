import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../utils/colors';

const RoomCard = ({ children, style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[style]}
      onPress={() =>
        navigation.navigate('ViewRoomScreen', { roomName: 'Case Room' })
      }
    >
      <View style={styles.shadow}>
        <View style={styles.container}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    height: 215,
    width: 235,
    borderRadius: 8,
    // elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.gray1,
  },
  container: {
    flex: 1,
  },
});

export default RoomCard;
