import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const VoiceIcon = ({ onPress }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={styles.shadow}>
      <View style={styles.container}>
        <MaterialIcons
          name="keyboard-voice"
          size={25}
          color="#E31313" // color sa figma wa sa color utils
        />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 100 / 2,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  container: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default VoiceIcon;
