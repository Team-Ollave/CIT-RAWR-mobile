import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import styles from './styles';

const { width: windowWidth } = Dimensions.get('window');

const placeholderImage = [
  {
    key: '1',
    image: 'https://i.stack.imgur.com/y9DpT.jpg',
  },
];

export default function Carousel({ images }) {
  const [index, setIndex] = useState(1);

  const onScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    setIndex(Math.round(event.nativeEvent.contentOffset.x / slideSize) + 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images.length ? images : placeholderImage}
        onScroll={onScroll}
        keyExtractor={(item) => item.id + ''}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }}
            style={[
              { width: windowWidth, height: windowWidth },
              styles.carouselItem,
            ]}
          />
        )}
      />

      <View style={styles.paginationContainer}>
        <Text style={styles.paginationLabel}>
          {index} / {images.length ? images.length : placeholderImage.length}
        </Text>
      </View>
    </View>
  );
}
