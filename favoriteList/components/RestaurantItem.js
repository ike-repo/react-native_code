import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RestaurantItem = ({item, onAddFavorite}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onAddFavorite}>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export {RestaurantItem};


const styles = StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        borderRadius:5
    },
    text:{
        fontWeight:'200',
    }
})