import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../utils/colors';
import styles from './styles';

export default function Search(props) {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color={Colors.accentColor} />
      <TextInput {...props} style={styles.input} placeholder="Search" />
    </View>
  );
}
