import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Modalize } from 'react-native-modalize';

const { height } = Dimensions.get('window');

const MapViewScreen = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open Modal</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'skyblue',
  },
  modal: {
    padding: 10,
  },
});

export default MapViewScreen;
