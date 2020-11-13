import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Modalize } from 'react-native-modalize';

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
      <Modalize ref={modalizeRef}>
        <View>
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
});

export default MapViewScreen;
