import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../utils/colors';
import VoiceIcon from './VoiceIcon';

const SearchInput = ({ style }) => {
  const [isVoiceActivated, setIsVoiceActivated] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputShadow}>
        <MaterialIcons
          name={isVoiceActivated ? 'keyboard-voice' : 'search'}
          size={20}
          color={isVoiceActivated ? '#E31313' : Colors.accentColor}
          onPress={() => setIsVoiceActivated(!isVoiceActivated)} // for testing ui only
          style={styles.inputIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          value={isVoiceActivated ? 'Listening...' : ''}
        />
      </View>
      {!isVoiceActivated && (
        <VoiceIcon onPress={() => setIsVoiceActivated(true)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 8,
  },
  textInput: {
    fontSize: 16,
    letterSpacing: 0.4,
    fontFamily: 'Poppins_400Regular',
    width: '70%',
  },
  inputShadow: {
    borderRadius: 999,
    backgroundColor: 'white',
    elevation: 5,

    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 12,
  },
});
export default SearchInput;
