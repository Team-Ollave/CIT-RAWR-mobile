import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import { CommonActions } from '@react-navigation/native';
import { styles, modalHeight, alwaysOpenHeight } from './styles';
import { Colors } from '../../utils/colors';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import RoomCard from '../../components/RoomCard';
import axios from 'axios';

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
  const [rooms, setRooms] = useState([]);

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
      .then((response) => setRooms(response.data), console.error);
  }, [buildingID]);

  const handleMarkerPress = (buildingName, description, id) => {
    modalizeRef.current?.close();
    modalizeRef.current?.open();
    setModalCurrentHeight(modalHeight);
    setBuildingName(buildingName);
    setBuildingID(id);
    setBuildingDescription(description);
    modalizeRef.current?.open();
  };

  const citRegion = {
    latitude: 10.295074924419716,
    longitude: 123.88105035466462,
    latitudeDelta: 0.00185,
    longitudeDelta: 0.00185,
  };

  const ModalHeader = () => {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{buildingName}</Text>
          <Text style={styles.headerDescription}>{buildingDescription}</Text>
        </View>
      </View>
    );
  };

  const ModalFooter = () => {
    return <View style={styles.modalFooter} />;
  };

  const BackButton = () => {
    return (
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => navigation.dispatch(CommonActions.goBack())}
      >
        <View style={styles.backButton}>
          <AntDesign name="arrowleft" size={20} color={Colors.black} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => {
    const {
      name: roomName,
      is_generic: isGeneric,
      available_start_time: availableStartTime,
      available_end_time: availableEndTime,
    } = item;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ViewRoomScreen', item)}
      >
        <RoomCard
          roomName={roomName}
          isAvailable
          isGeneric={isGeneric}
          availableStartTime={availableStartTime}
          availableEndTime={availableEndTime}
        />
      </TouchableOpacity>
    );
  };

  const ViewSeparator = () => {
    return <View style={styles.reservationSeparator} />;
  };

  const ListHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.listTitle}>Rooms</Text>
      </View>
    );
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
      <BackButton />
      <Modalize
        ref={modalizeRef}
        modalHeight={modalCurrentHeight}
        alwaysOpen={alwaysOpenHeight}
        HeaderComponent={ModalHeader}
        FooterComponent={ModalFooter}
        handlePosition={'inside'}
        modalStyle={styles.modalStyle}
        handleStyle={styles.handleStyle}
        withOverlay={false}
        flatListProps={{
          style: { flex: 1 },
          data: rooms,
          renderItem: renderItem,
          keyExtractor: (item) => item.id.toString(),
          showsVerticalScrollIndicator: false,
          ListHeaderComponent: ListHeader,
          ItemSeparatorComponent: ViewSeparator,
        }}
      />
    </View>
  );
};

export default MapViewScreen;
