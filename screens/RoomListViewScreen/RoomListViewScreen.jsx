import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, FlatList, Text, StatusBar } from 'react-native';
import dummydata from './dummydata'
import Card from './temporaryComponents/Card'
import CardContent from './temporaryComponents/CardContent'
import SearchInput from './temporaryComponents/SearchInput'
import ExploreMapActionButton from './temporaryComponents/ExploreMapActionButton'
import styles from './styles'

const slug = string => string.toLowerCase().replace(' ', '-')

// inline styles to be removed

const Tab = createMaterialBottomTabNavigator();

const Section = ({ item }) => (
    <View style={{ marginLeft: 10, marginVertical: 10 }}>
        <Text style={styles.building}>{item.building}</Text>
        <View>
            <FlatList
                horizontal
                data={item.rooms}
                renderItem={({ item }) => (
                    <View style={{ margin: 5 }}>
                        <Card>
                            <CardContent item={item} />
                        </Card>
                    </View>
                )}
                keyExtractor={(item, index) => `${slug(item.roomname)}-${index}`}
            />
        </View>
    </View>
)

const RoomListViewScreen = () => (
    <View style={{ marginTop: StatusBar.currentHeight, flex: 1, justifyContent: 'space-between' }}>
        <SearchInput />
        <View style={{ position: 'absolute', top: 0, bottom: 0, paddingTop: 50 }}>
            <FlatList
                data={dummydata}
                renderItem={Section}
                keyExtractor={item => slug(item.building)}
            />
        </View>
        <ExploreMapActionButton />
    </View>
);

export default RoomListViewScreen;