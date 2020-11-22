import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../utils/colors';
import VoiceIcon from './VoiceIcon';

const SearchInput = () => {
  const [isVoiceActivated, setIsVoiceActivated] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputShadow}>
        <MaterialIcons
          name={isVoiceActivated ? 'keyboard-voice' : 'search'}
          size={25}
          color={isVoiceActivated ? '#E31313' : Colors.accentColor}
          // di mugana ang iconStyle ug backgroundColor
          backgroundColor={isVoiceActivated ? 'red' : 'red'}
          onPress={() => setIsVoiceActivated(!isVoiceActivated)} // for testing ui only
        />
        <TextInput
          placeholder="Search"
          style={styles.input}
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
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  inputShadow: {
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: 10,

    flex: 1,
    flexDirection: 'row',
  },
});
export default SearchInput;
