import React from 'react';
import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';

const Post = (props) =>{

    const postData = props.route.params.selectedPost

    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:20, margin:20}}>{postData.userName}</Text>
                <Image
                    source={{uri: postData.img}}
                    style={{ height:Dimensions.get('window').height/2, margin:20 }}
                />
                <Text style={{ marginVertical:10, marginHorizontal:20 }}>{postData.description}</Text>
            </View>
        </SafeAreaView>
    )
}

export{Post}