import React from 'react';
import {Image, Text, TouchableWithoutFeedback,  View,Dimensions, StyleSheet} from 'react-native';


const PostCard = (props)=>{
    return(
        <TouchableWithoutFeedback onPress={() => props.onSelect()}>
            <View>
                <Image style={styles.image} source={{uri:props.post.img}}/>
                <View>
                    <Text style={styles.title}> {props.post.userName}</Text>
                    <Text numberOfLines={2} style={styles.text}> {props.post.description}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PostCard;


const styles = StyleSheet.create({
    image:{
        height: Dimensions.get("window").height/4,
        margin:10
    },
    title:{
        fontWeight:'bold',
        margin:10,
    },
    text:{
        margin:10
    }
})
