import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Dimensions, Image} from 'react-native';

const RestaurantItem = (props) =>{
    return (
        <TouchableOpacity 
            style = {styles.container}
            onPress={props.onSelect}
            >
                <Image 
                style={styles.img}
                source={{uri: props.restaurant.image_url}}
                />
                <Text style= {styles.name}>{props.restaurant.name}</Text>
        </TouchableOpacity>
    )
}

export {RestaurantItem}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#bdbdbd',
        padding:10,
        margin:5,
        borderRadius:5

    },
    img:{
        height:Dimensions.get('window').height / 3,
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
    }
})