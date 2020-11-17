import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import EventsTodayTab from './tabs/EventsTodayTab';
import EventsUpcomingTab from './tabs/EventsUpcomingTab';
import { Colors } from '../../utils/colors';
import { AntDesign } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function ViewRoomScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Image
          source={{ uri: 'https://source.unsplash.com/400x400/' }}
          style={{
            width: 400,
            height: 400,
            resizeMode: 'cover',
          }}
        />

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
          <Text style={styles.headerTitle}>Case Room</Text>
          <Text style={styles.headerDescription}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: styles.tabIndicator,
            labelStyle: styles.tabLabel,
            style: styles.tab,
            activeTintColor: Colors.accentColor,
            inactiveTintColor: Colors.gray3,
          }}
        >
          <Tab.Screen name="Today" component={EventsTodayTab} />
          <Tab.Screen name="Upcoming" component={EventsUpcomingTab} />
        </Tab.Navigator>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.availabilityLabel}>Earliest Availability:</Text>
          <Text style={styles.availabilityDate}>Tue Jan 12, 2020</Text>
        </View>
        <TouchableOpacity style={styles.reserveButton} activeOpacity={0.8}>
          <Text style={styles.reserveButtonTitle}>Reserve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
