import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import FeaturedBadge from '../../../components/FeaturedBadge';
import styles from '../styles';

const imgURI = {
  uri: 'https://cit.edu/wp-content/uploads/2020/05/caseroom.png',
};

//required ug dimension kung Image ra nga component
const CardContent = ({ item }) => (
  <View style={styles.cardContentContainer}>
    <View style={styles.cardContentImageContainer}>
      <ImageBackground source={imgURI} style={styles.cardContentImageBackground}>
        {item.featured && (
          <FeaturedBadge style={styles.featuredBadge} />
        )}
      </ImageBackground>
    </View>

    <View style={styles.caption}>
      <Text style={styles.roomname}>{item.roomname}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

export default CardContent;
