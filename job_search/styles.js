import {StyleSheet, Dimensions } from 'react-native';


export const topicItem = StyleSheet.create({
    container:{
        padding:12,
        margin:7,
        borderRadius:6
    },
    text:{
        fontWeight:'bold',
        color:'white'
    }
})

export const introduction = StyleSheet.create({
    banner:{
        height: Dimensions.get("window").height/3,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
})

export const jobItem = StyleSheet.create({

    container:{
        padding:12,
        margin:7,
        borderRadius:6
    },  
    jobName:{
        fontWeight:'bold'
    },
})

export const jobs = StyleSheet.create({
    modalBackground:{
        backgroundColor:'white',
        fontSize:20,
        fontWeight:'bold',
        borderRadius:5
    },
    jobTitle:{
        fontWeight:'bold',
        fontSize:20,
    }
})