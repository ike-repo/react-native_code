import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CityItem = (props) => {
    return(
        <TouchableOpacity 
        style={styles.container}
        onPress={props.onSelect}>
            <Text style={styles.text}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}
export {CityItem}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'300',
    }
})