import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MapViewScreen')}>
        <Text>Go to Map View Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ViewRoomScreen')}>
        <Text>Go to View Room Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ReservationFormScreen')}
      >
        <Text>Go to Reservation Form Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
