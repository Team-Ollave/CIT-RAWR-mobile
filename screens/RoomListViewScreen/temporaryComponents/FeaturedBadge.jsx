import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const FeaturedBadge = () => (
    <View style={styles.container}>
        <Text>Featured</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: 80,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})
export default FeaturedBadge;