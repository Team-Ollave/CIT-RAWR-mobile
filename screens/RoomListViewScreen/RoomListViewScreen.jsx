import React from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import dummydata from './dummydata'
import Card from './temporaryComponents/Card'
import FeaturedBadge from './temporaryComponents/FeaturedBadge'
import styles from './styles'

const slug = string => string.toLowerCase().replace(' ', '-')

// inline styles to be removed

const Section = ({ item }) => (
    <View style={{ marginLeft: 10, marginVertical: 10 }}>
        <Text style={styles.building}>{item.building}</Text>
        <View>
            <FlatList
                horizontal={true}
                data={item.rooms}
                renderItem={({ item }) => (
                    <View style={{ margin: 5 }}>
                        <Card>
                            <View style={styles.img}>
                                {
                                    item.featured &&
                                    (
                                        <View style={styles.badge}>
                                            <FeaturedBadge />
                                        </View>
                                    )
                                }

                            </View>
                            <View style={styles.caption}>
                                <Text style={styles.roomname}>
                                    {item.roomname}
                                </Text>
                                <Text style={styles.description}>
                                    {item.description}
                                </Text>
                            </View>
                        </Card>
                    </View>
                )}
                keyExtractor={(item, index) => `${slug(item.roomname)}-${index}`}
            />
        </View>
    </View>
)

const RoomListViewScreen = () => (
    <View style={{ marginTop: StatusBar.currentHeight }}>
        <FlatList
            data={dummydata}
            renderItem={Section}
            keyExtractor={item => slug(item.building)}
        />
    </View>
);

export default RoomListViewScreen;