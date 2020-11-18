import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { styles, modalHeight, width, alwaysOpenHeight } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GenericRoomsTab from './tabs/GenericRoomsTab';
import FeaturedRoomsTab from './tabs/FeaturedRoomsTab';

const Tab = createMaterialTopTabNavigator();

const MapViewScreen = ({ navigation }) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const Header = () => {
    return (
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ST Building</Text>
          <Text style={styles.headerDescription}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>
    );
  };

  const renderTabs = () => {
    return (
      <Tab.Navigator
        initialLayout={{ width: width }}
        tabBarOptions={{
          indicatorStyle: styles.indicatorStyle,
          labelStyle: styles.labelStyle,
          style: styles.tab,
        }}
      >
        <Tab.Screen
          name="Featured"
          component={(FeaturedRoomsTab, { navigation: navigation })}
        />
        <Tab.Screen
          name="Generic"
          component={(GenericRoomsTab, { navigation: navigation })}
        />
      </Tab.Navigator>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Text>Map</Text>
      </View>
      <Modalize
        ref={modalizeRef}
        HeaderComponent={Header}
        modalStyle={styles.modalStyle}
        modalHeight={modalHeight}
        alwaysOpen={alwaysOpenHeight}
        handlePosition={'inside'}
      >
        <renderTabs />
      </Modalize>
    </View>
  );
};

export default MapViewScreen;
