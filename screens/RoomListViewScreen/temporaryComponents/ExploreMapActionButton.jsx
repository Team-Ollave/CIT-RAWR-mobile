import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';
const ExploreMapActionButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('MapViewScreen')}
      style={styles.exploreContainer}
    >
      <View style={styles.exploreMapActionButtonContainer}>
        <Entypo name="location-pin" size={22} color="red" />
        <Text style={styles.exploreLabel}>Explore Map</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExploreMapActionButton;
