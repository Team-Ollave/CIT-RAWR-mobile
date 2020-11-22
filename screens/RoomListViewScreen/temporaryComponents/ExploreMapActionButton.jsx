import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View style={styles.exploreMapActionButtonShadow}>
        <View style={styles.exploreMapActionButtonContainer}>
          <Entypo name="location-pin" size={22} color="red" />
          <Text style={styles.exploreLabel}>Explore Map</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   shadow: {
//     borderRadius: 100 / 2,
//     backgroundColor: 'transparent',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,

//     elevation: 3,

//     width: 135,
//     alignSelf: 'center',
//     marginBottom: 10,
//   },
//   container: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     borderRadius: 100 / 2,
//     justifyContent: 'center',
//     padding: 7,
//   },
// });
export default ExploreMapActionButton;
