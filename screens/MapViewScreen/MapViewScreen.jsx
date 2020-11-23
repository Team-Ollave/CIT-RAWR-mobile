import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { CommonActions } from '@react-navigation/native';
import { styles, modalHeight, width, alwaysOpenHeight } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../utils/colors';
import MapView from 'react-native-maps';
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
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ST Building</Text>
          <Text style={styles.headerDescription}>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 10.295663912051328,
            longitude: 123.88045402698751,
            latitudeDelta: 0.0015,
            longitudeDelta: 0.0015,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      >
        <View style={styles.backButton}>
          <AntDesign name="arrowleft" size={20} color={Colors.black} />
        </View>
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        HeaderComponent={Header}
        modalStyle={styles.modalStyle}
        modalHeight={modalHeight}
        alwaysOpen={alwaysOpenHeight}
        handlePosition={'inside'}
      >
        <Tab.Navigator
          initialLayout={{ width: width }}
          tabBarOptions={{
            indicatorStyle: styles.tabIndicator,
            labelStyle: styles.tabLabel,
            style: styles.tab,
            activeTintColor: Colors.accentColor,
            inactiveTintColor: Colors.gray3,
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
