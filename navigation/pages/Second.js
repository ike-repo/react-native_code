import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const Second = (props) =>{
    const userNum = props.route.params.myNum;
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:40}}>Second</Text>
                <Text style={{fontSize:40}}>Number: {userNum}</Text>
                <Button 
                    title="Back"
                    onPress={()=> props.navigation.goBack()}/>
            </View>
        </SafeAreaView>
    )
} 

export default Second; 