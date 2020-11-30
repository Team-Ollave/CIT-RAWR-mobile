import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

const imgURI = {
  uri: 'https://cit.edu/wp-content/uploads/2020/05/caseroom.png',
};

//required ug dimension kung Image ra nga component
const CardContent = ({ item }) => (
  <View style={styles.cardContentContainer}>
    <View style={styles.cardContentImageContainer}>
      <ImageBackground source={imgURI} style={styles.cardContentImageBackground}>

      </ImageBackground>
    </View>

    <View style={styles.caption}>
      <Text style={styles.roomname}>{item.name}</Text>
      <Text style={styles.description}>Lorem ipsum dolor, sit amet sicing</Text>
    </View>
  </View>
);

export default CardContent;
