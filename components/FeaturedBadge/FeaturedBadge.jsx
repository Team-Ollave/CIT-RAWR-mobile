import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function FeaturedBadge({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>Featured</Text>
    </View>
  );
}
