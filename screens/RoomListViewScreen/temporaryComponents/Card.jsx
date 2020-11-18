import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ children }) => (
    <TouchableOpacity>
        <View style={styles.shadow}>
            <View style={styles.container}>
                {children}
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    shadow: {
        height: 215,
        width: 235,
        borderRadius: 10,
        backgroundColor: "transparent",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        overflow: "hidden",

    },
    container: {
        height: 215,
        width: 235,
        borderRadius: 10,
        backgroundColor: "white",

        overflow: "hidden",
    }
})

export default Card;