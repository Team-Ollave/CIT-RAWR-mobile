import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles'
const VoiceIcon = ({ onPress }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
    <View style={styles.voiceIconContainer}>
      <MaterialIcons
        name="keyboard-voice"
        size={25}
        color="#E31313"
      />
    </View>
  </TouchableOpacity>
);
export default VoiceIcon;
