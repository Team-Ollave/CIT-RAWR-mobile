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

  // const onOpen = () => {
  //   modalizeRef.current?.open();
  // };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Text>Map</Text>
      </View>
      <Modalize
        ref={modalizeRef}
        modalStyle={styles.modalStyle}
        modalHeight={modalHeight}
        alwaysOpen={alwaysOpenHeight}
        handlePosition={'inside'}
      >
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>ST Building</Text>
            <Text style={styles.headerDescription}>
              Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
        <Tab.Navigator
          initialLayout={{ width: width, height: 300 }}
          tabBarOptions={{
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle,
            style: styles.tab,
          }}
        >
          <Tab.Screen name="Featured" component={FeaturedRoomsTab} />
          <Tab.Screen name="Generic" component={GenericRoomsTab} />
        </Tab.Navigator>
      </Modalize>
    </View>
  );
};

export default MapViewScreen;
