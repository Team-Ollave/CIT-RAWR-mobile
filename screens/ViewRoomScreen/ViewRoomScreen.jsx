import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ReservationCard from '../../components/ReservationCard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';
import EventsTodayTab from './tabs/EventsUpcomingTab';
import EventsUpcomingTab from './tabs/EventsUpcomingTab';
import { Colors } from '../../utls/colors';

const Tab = createMaterialTopTabNavigator();

export default function ViewRoomScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.images}>
        <Text>images</Text>
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
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle,
            style: styles.tab,
            activeTintColor: Colors.accentColor,
            inactiveTintColor: Colors.gray3,
          }}
        >
          <Tab.Screen name="Today" component={EventsTodayTab} />
          <Tab.Screen name="Upcoming" component={EventsUpcomingTab} />
        </Tab.Navigator>
        {/* <View style={styles.footer}>
          <View>
            <Text style={styles.availabilityText}>Earliest Availability:</Text>
            <Text style={styles.availabilityDate}>Tue Jan 12, 2020</Text>
          </View>
          <TouchableOpacity style={styles.reserveButton}>
            <Text style={styles.reserveButtonTitle}>Reserve</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

{
  /* <View style={styles.tabsContainer}>
          <View style={[styles.tab, styles.tabActive]}>
            <Text style={[styles.tabLabel, styles.tabLabelActive]}>Today</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabLabel}>Upcoming</Text>
          </View>
        </View> */
}
{
  /* <View style={styles.tabContent}>
          <FlatList
            style={styles.reservationList}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Text style={styles.listTitle}>Events</Text>}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={styles.reservationSeparator} />
            )}
          />
        </View> */
}
