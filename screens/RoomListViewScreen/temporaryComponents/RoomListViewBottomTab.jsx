import React from 'react';
import { View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Colors } from '../../../utils/colors';
import { Feather } from '@expo/vector-icons';
import RoomListViewScreen from '../RoomListViewScreen';

const Tab = createMaterialBottomTabNavigator();

const temp = () => <View></View>

const RoomListViewBottomTab = () => (
    <Tab.Navigator
        barStyle={{ backgroundColor: 'white' }}
        activeColor={Colors.accentColor}
    >
        <Tab.Screen
            name="Rooms"
            component={RoomListViewScreen}
            options={{
                tabBarIcon: () => (
                    <MaterialIcons
                        name="search"
                        size={20}
                    />
                )
            }}
        />
        <Tab.Screen
            name="Reservations"
            component={temp}
            options={{
                tabBarIcon: () => (
                    <Feather
                        name="calendar"
                        size={20}
                    />
                )
            }}
        />
    </Tab.Navigator>
)

export default RoomListViewBottomTab;