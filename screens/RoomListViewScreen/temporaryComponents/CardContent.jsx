import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import styles from '../styles';
import FeaturedBadge from './FeaturedBadge';
const imgURI = {
  uri: 'https://cit.edu/wp-content/uploads/2020/05/caseroom.png',
};

const CardContent = ({ item }) => (
  <ImageBackground source={imgURI} style={styles.img}>
    {item.featured && (
      <View style={styles.badge}>
        <FeaturedBadge />
      </View>
    )}
    <View style={styles.caption}>
      <Text style={styles.roomname}>{item.roomname}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </ImageBackground>
);

export default CardContent;
