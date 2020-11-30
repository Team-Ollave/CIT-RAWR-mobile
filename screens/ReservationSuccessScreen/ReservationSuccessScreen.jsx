import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const ReservationSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/success.png')}
        loa
      />
      <Text style={styles.success}>Reservation Successful</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.successDescription}>
          Please wait 1 to 3 business days for the admins to accept your
          reservation. While you're still here, check for ongoing events at
          school.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonTextContainer}
        onPress={() => navigation.navigate('RoomListViewScreen')}
      >
        <Text style={styles.buttonText}>Let's Go!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReservationSuccessScreen;
