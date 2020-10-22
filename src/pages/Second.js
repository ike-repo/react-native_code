import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native'

const Second = (props) => {
    const val = props.route.params.entered;
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:20}}>Second</Text>
                <Text style={{fontSize:20}}>Value: {val}</Text>
                <Button
                    title="Back"
                    onPress={() => props.navigation.goBack()}/>
            </View>
        </SafeAreaView>
    )
}

export default Second;