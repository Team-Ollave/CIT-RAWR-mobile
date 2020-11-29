import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../../utils/colors';
import VoiceIcon from './VoiceIcon';
import styles from '../styles';

const SearchInput = ({ style }) => {

  const [isVoiceActivated, setIsVoiceActivated] = useState(false);

  return (
    <View style={[styles.searchInputContainer, style]}>
      <View style={styles.searchInputTextInputContainer}>
        <MaterialIcons
          name={isVoiceActivated ? 'keyboard-voice' : 'search'}
          size={20}
          color={isVoiceActivated ? '#E31313' : Colors.accentColor}
          onPress={() => setIsVoiceActivated(!isVoiceActivated)} // for testing ui only
          style={styles.searchInputSearchIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchInputTextInput}
          value={isVoiceActivated ? 'Listening...' : ''}
        />
      </View>
      {!isVoiceActivated && (
        <VoiceIcon onPress={() => setIsVoiceActivated(true)} />
      )}
    </View>
  );
};

export default SearchInput;
