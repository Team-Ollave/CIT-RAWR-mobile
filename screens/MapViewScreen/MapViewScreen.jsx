import React, { useEffect, useRef, useState, createContext } from 'react';
import { Animated, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { CommonActions } from '@react-navigation/native';
import { styles, modalHeight, width, alwaysOpenHeight } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../utils/colors';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import roomsContext from './roomsContext';
import GenericRoomsTab from './tabs/GenericRoomsTab';
import FeaturedRoomsTab from './tabs/FeaturedRoomsTab';
import axios from 'axios';

const Tab = createMaterialTopTabNavigator();

const MapViewScreen = ({ navigation }) => {
  // hooks
  const modalizeRef = useRef(null);
  const [buildingName, setBuildingName] = useState('Select a building');
  const [buildingDescription, setBuildingDescription] = useState('');
  const [buildingID, setBuildingID] = useState(null);
  const [modalCurrentHeight, setModalCurrentHeight] = useState(
    alwaysOpenHeight,
  );
  const [buildingData, setBuildingData] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [genericRooms, setGenericRooms] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.8.113:8000/api/buildings/').then((response) => {
      setBuildingData(response.data);
    }, console.error);
  }, []);

  useEffect(() => {
    axios
      .get('http://192.168.8.113:8000/api/rooms/', {
        params: { building_id: buildingID },
      })
      .then(distributeRooms, console.error);
  }, [buildingID]);

  const distributeRooms = (response) => {
    const featured = response.data.filter(
      ({ is_generic: isGeneric }) => !isGeneric,
    );
    setFeaturedRooms(featured);
    const generic = response.data.filter(
      ({ is_generic: isGeneric }) => isGeneric,
    );
    setGenericRooms(generic);
  };

  const handleMarkerPress = (buildingName, description, id) => {
    modalizeRef.current?.close();
    modalizeRef.current?.open();
    setModalCurrentHeight(modalHeight);
    setBuildingName(buildingName);
    setBuildingID(id);
    setBuildingDescription(description);
    modalizeRef.current?.open();
  };

  const Header = () => {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{buildingName}</Text>
          <Text style={styles.headerDescription}>{buildingDescription}</Text>
        </View>
      </View>
    );
  };

  const citRegion = {
    latitude: 10.295074924419716,
    longitude: 123.88105035466462,
    latitudeDelta: 0.00185,
    longitudeDelta: 0.00185,
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={citRegion}
          provider={PROVIDER_GOOGLE}
          zoomEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          showsBuildings={false}
          moveOnMarkerPress
        >
          {buildingData.map(
            ({ id, name, latitude, longitude, description }) => {
              return (
                <Marker
                  key={id}
                  coordinate={{ latitude: latitude, longitude: longitude }}
                  description={description}
                  title={name}
                  onPress={() => handleMarkerPress(name, description, id)}
                />
              );
            },
          )}
        </MapView>
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
        modalHeight={modalCurrentHeight}
        alwaysOpen={alwaysOpenHeight}
        HeaderComponent={Header}
        handlePosition={'inside'}
        modalStyle={styles.modalStyle}
        handleStyle={styles.handleStyle}
        withOverlay={false}
        openAnimationConfig={{ timing: { duration: 400 } }}
        customRenderer={
          <Animated.View style={styles.animatedViewStyle}>
            <roomsContext.Provider value={{ featuredRooms, genericRooms }}>
              <Tab.Navigator
                initialLayout={styles.tabNavInitialLayout}
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
            </roomsContext.Provider>
          </Animated.View>
        }
      />
    </View>
  );
};

export default MapViewScreen;
