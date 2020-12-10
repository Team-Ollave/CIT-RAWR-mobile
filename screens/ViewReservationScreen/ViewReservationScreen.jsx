import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import ipConfig from '../../ipConfig';
import { Colors } from '../../utils/colors';
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import StatusBadge from '../../components/StatusBadge';
import moment from 'moment';
import { formatTime } from '../../utils/constants';

const ViewReservationScreen = ({
  navigation,
  route: {
    params: {
      eventName,
      requestorName,
      eventStartTime,
      eventEndTime,
      eventDescription,
      eventDate,
      status,
      roomId,
    },
  },
}) => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    axios.get(`${ipConfig}/api/rooms/${roomId}`).then((response) => {
      setRoomData(response.data);
    }, console.error);
  }, []);

  console.log(
    moment(new Date().toDateString() + ' ' + eventStartTime).format('hh:mm A'),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(CommonActions.goBack())}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Reservations</Text>
        </View>
        <StatusBadge status={status} />
      </View>
      <Text style={styles.eventName}>{eventName}</Text>

      <View style={{ marginBottom: 16 }}>
        <View style={styles.details}>
          <SimpleLineIcons name="location-pin" size={16} color={Colors.gray4} />
          <Text style={styles.detailText}>
            {roomData.building_data?.name} - {roomData.name}
          </Text>
        </View>
        <View style={styles.details}>
          <Feather name="calendar" size={16} color={Colors.gray4} />
          <Text style={styles.detailText}>
            {new Date(eventDate).toDateString()} {formatTime(eventStartTime)} -{' '}
            {formatTime(eventEndTime)}
          </Text>
        </View>
        <View style={styles.details}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={16}
            color={Colors.gray4}
          />
          <Text style={styles.detailText}>Reserved by {requestorName}</Text>
        </View>
      </View>

      <Text style={styles.description}>{eventDescription}</Text>
    </View>
  );
};

export default ViewReservationScreen;
