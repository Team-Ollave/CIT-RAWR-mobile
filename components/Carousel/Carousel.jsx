import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import styles from './styles';

const { width: windowWidth } = Dimensions.get('window');

const data = Array.from({ length: 10 }).map((_, index) => ({
  key: index.toString(),
  image: `https://picsum.photos/1600/900?random=${index}`,
}));

export default function Carousel2({ images }) {
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
        data={images}
        onScroll={onScroll}
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
          {index} / {images.length}
        </Text>
      </View>
    </View>
  );
}
