import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { styles } from './styles';
// import ViewRoomScreen from '../ViewRoomScreen'
import RoomListViewBottomTab from '../RoomListViewScreen/temporaryComponents/RoomListViewBottomTab'

const HomeScreen = ({ navigation }) => {
  return (
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={() => navigation.navigate('MapViewScreen')}>
    //     <Text>Go to Map View Screen</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => navigation.navigate('ViewRoomScreen')}>
    //     <Text>Go to View Room Screen</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => navigation.navigate('RoomListViewScreen')}>
    //     <Text>Go to Room List View Screen</Text>
    //   </TouchableOpacity>
    // </View>
    <RoomListViewBottomTab />

  );
};

export default HomeScreen;
