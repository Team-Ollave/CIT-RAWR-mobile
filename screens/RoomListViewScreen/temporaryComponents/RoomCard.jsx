import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoomCard = ({ children }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8}>
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
    borderRadius: 10,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    overflow: 'hidden',
    margin: 5,
  },
  container: {
    flex: 1,
  },
});

export default RoomCard;
