import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux'

const Favorites = (props) => {
    const favList = useSelector(state => state.favoriteList)
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <FlatList 
                    keyExtractor={(_, index) => index.toString()}
                    data={favList}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                    ListEmptyComponent={() => <Text>Nothing added</Text>}
                />
            </View>
        </SafeAreaView>
    );
}

export { Favorites };