import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const num = 15;

const First = (props)=>{
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:40}}>First</Text>
                <Text style={{fontSize:40}}>15</Text>
                <Button title="Go!" 
                        onPress={() => props.navigation.navigate('SecondPage', 
                        {myNum : num})}
                />
            </View>
        </SafeAreaView>
    )
}

export default First;