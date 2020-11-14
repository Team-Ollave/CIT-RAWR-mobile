import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';
import EStyleSheet from 'react-native-extended-stylesheet';

const { height } = Dimensions.get('window');
const MapViewScreen = ({ navigation }) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ViewRoomScreen')}>
        <Text>Go to View Room Screen</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        modalHeight={height * 0.7}
        alwaysOpen={height * 0.3}
        handlePosition={'inside'}
      >
        <View style={styles.modal}>
          <Text>This is the Modal</Text>
        </View>
      </Modalize>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'skyblue',
  },
  modal: {
    padding: 10,
    height: '70%',
  },
  modalAlwaysOpenHeight: {
    height: '30%',
  },
});

export default MapViewScreen;
