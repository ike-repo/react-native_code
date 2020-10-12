import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';

const Button=(props)=>{
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}> {props.text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#82ada9',
        height:Dimensions.get("window").height * 0.08,
        width: Dimensions.get("window").width * 0.5,
        marginTop:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'white',
        fontWeight:'bold'
    }
})
export {Button};