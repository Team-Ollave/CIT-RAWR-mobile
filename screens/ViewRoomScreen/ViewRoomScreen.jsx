import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import EventsTodayTab from './tabs/EventsTodayTab';
import EventsUpcomingTab from './tabs/EventsUpcomingTab';
import { Colors } from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import Carousel from '../../components/Carousel';
import axios from 'axios';
import ipConfig from '../../ipConfig';
import { Entypo, Feather } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();
const tabWidth = Dimensions.get('window').width * 0.884;

export default function ViewRoomScreen({
  navigation,
  route: {
    params: {
      name: roomName,
      id: roomId,
      room_images: roomImages,
      building_data: buildingData,
      available_start_time: openingTime,
      available_end_time: closingTime,
    },
  },
}) {
  const [earliestAvailability, setEarliestAvailability] = useState(
    new Date().toDateString(),
  );

  useEffect(() => {
    axios
      .get(`${ipConfig}/api/rooms/${roomId}/earliest-availability`)
      .then((res) => setEarliestAvailability(new Date(res.data).toDateString()))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Carousel images={roomImages} />
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        >
          <View style={styles.backButton}>
            <AntDesign name="arrowleft" size={20} color={Colors.black} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{roomName}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name="location-pin" size={20} color={Colors.gray4} />
              <Text style={styles.headerDescription}>{buildingData.name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 16,
              }}
            >
              <Feather name="calendar" size={16} color={Colors.gray4} />
              <Text style={styles.headerDescription}>
                {openingTime} - {closingTime}
              </Text>
            </View>
          </View>
        </View>
        <Tab.Navigator
          initialLayout={{ width: tabWidth }}
          tabBarOptions={{
            indicatorStyle: styles.tabIndicator,
            labelStyle: styles.tabLabel,
            style: styles.tab,
            activeTintColor: Colors.accentColor,
            inactiveTintColor: Colors.gray3,
          }}
        >
          <Tab.Screen
            name="Today"
            component={EventsTodayTab}
            initialParams={{ roomId }}
          />
          <Tab.Screen
            name="Upcoming"
            component={EventsUpcomingTab}
            initialParams={{ roomId }}
          />
        </Tab.Navigator>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.availabilityLabel}>Earliest Availability:</Text>
          <Text style={styles.availabilityDate}>{earliestAvailability}</Text>
        </View>
        <TouchableOpacity
          style={styles.reserveButton}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ReservationFormScreen', { roomId })
          }
        >
          <Text style={styles.reserveButtonTitle}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
