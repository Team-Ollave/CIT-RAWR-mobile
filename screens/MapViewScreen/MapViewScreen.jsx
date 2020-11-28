import React, { useRef, useState } from 'react';
import { Animated, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { CommonActions } from '@react-navigation/native';
import { styles, modalHeight, width, alwaysOpenHeight } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../../utils/colors';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GenericRoomsTab from './tabs/GenericRoomsTab';
import FeaturedRoomsTab from './tabs/FeaturedRoomsTab';

const Tab = createMaterialTopTabNavigator();

const MapViewScreen = ({ navigation }) => {
  const modalizeRef = useRef(null);
  const [buildingName, setBuildingName] = useState('Select a building');
  const [buildingDescription, setBuildingDescription] = useState('');
  const [region, setRegion] = useState({
    latitude: 10.295573416419819,
    longitude: 123.8806080375,
    latitudeDelta: 0.0017,
    longitudeDelta: 0.0017,
  });

  const handleMarkerPress = (buildingName, description) => {
    setBuildingName(buildingName);
    setBuildingDescription(description);
    modalizeRef.current?.open();
  };

  const Header = (props) => {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{buildingName}</Text>
          <Text style={styles.headerDescription}>{buildingDescription}</Text>
        </View>
      </View>
    );
  };

  const buildingCoordinates = [
    {
      id: 1,
      buildingName: 'ST Building',
      description: 'This is the ST Building',
      latitude: 10.294319963606112,
      longitude: 123.88102723728441,
    },
    {
      id: 2,
      buildingName: 'Main Building',
      description: 'This is the Main Building',
      latitude: 10.294751445183108,
      longitude: 123.88060210717293,
    },
    {
      id: 3,
      buildingName: 'Library',
      description: 'This is the library',
      latitude: 10.295214594471053,
      longitude: 123.8807026900071,
    },
    {
      id: 4,
      buildingName: 'Engineering Building',
      description: 'This is the Engineering Building',
      latitude: 10.295778685623082,
      longitude: 123.88099773297772,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={region}
          provider={PROVIDER_GOOGLE}
          zoomEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          showsBuildings={false}
          moveOnMarkerPress
        >
          {buildingCoordinates.map(
            ({ id, buildingName, latitude, longitude, description }) => {
              return (
                <Marker
                  key={id}
                  coordinate={{ latitude: latitude, longitude: longitude }}
                  description={description}
                  title={buildingName}
                  onPress={({ coordinate }) =>
                    handleMarkerPress(buildingName, description, coordinate)
                  }
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
        HeaderComponent={Header}
        modalStyle={styles.modalStyle}
        modalHeight={modalHeight}
        snapPoint={alwaysOpenHeight}
        handlePosition={'inside'}
        customRenderer={
          <Animated.View style={{ flex: 1 }}>
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
          </Animated.View>
        }
      />
    </View>
  );
};

export default MapViewScreen;
