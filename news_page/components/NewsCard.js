import React from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';


const NewsCard = ({news}) => {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
            <TouchableOpacity><Image 
                source={{uri: news.imageUrl}}
                style={styles.image}/></TouchableOpacity>
            </View>
            <View style={styles.article}>
                <TouchableOpacity><Text style={styles.title}>{news.title}</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.description}>{news.description}</Text></TouchableOpacity>
            </View>
        </View>
        
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        // borderWidth:1,
        // borderColor:'#e0e0e0',
        padding:5,
        margin:5,
        // borderRadius:5
    },
    image:{
        resizeMode:'contain',
        height: Dimensions.get('window').height * 0.18,
        borderRadius:5,
        // backgroundColor:'lightblue'
    },
    article:
    {
        flex:1,
        alignSelf:'center',
        marginLeft:10
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10
    },
    description:{
        marginRight:5

    }
})

export default NewsCard;