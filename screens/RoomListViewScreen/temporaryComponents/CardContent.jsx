import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../styles';

const imgURI = {
  uri: 'https://cit.edu/wp-content/uploads/2020/05/caseroom.png',
};

const placeholderImage = [
  {
    key: '1',
    image: 'https://i.stack.imgur.com/y9DpT.jpg',
  },
];

//required ug dimension kung Image ra nga component
const CardContent = ({ item }) => {
  const roomImage = item.room_images.length
    ? item.room_images[0].image
    : placeholderImage[0].image;

  return (
    <View style={styles.cardContentContainer}>
      <View style={styles.cardContentImageContainer}>
        <ImageBackground
          source={{ uri: roomImage }}
          style={styles.cardContentImageBackground}
        />
      </View>

      <View style={styles.caption}>
        <Text style={styles.roomname} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.description} numberOfLines={1}>
          Lorem ipsum dolor, sit amet sicing
        </Text>
      </View>
    </View>
  );
};

export default CardContent;
