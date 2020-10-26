import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Dimensions, Image} from 'react-native';

let expensive = <Image source={require('./baseline_favorite_border_black_18dp.png')}/>;
let affordable = <Image source={require('./baseline_favorite_black_18dp.png')}/>;

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
                <View style= {{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style= {styles.name}>{props.restaurant.name}</Text>
                <Text>{props.restaurant.price > 2 ? expensive  : affordable }</Text>
                </View>
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
        alignContent:'center'

        
    },
    name:{
        fontSize:15, 
        alignSelf:'center'
    },

})