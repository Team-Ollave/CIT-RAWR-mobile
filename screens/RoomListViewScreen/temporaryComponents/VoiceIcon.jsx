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
    borderRadius: 999,
    elevation: 5,
  },
  container: {
    padding: 10,
    borderRadius: 999,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default VoiceIcon;
