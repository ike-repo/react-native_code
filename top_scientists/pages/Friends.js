import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';


const Friends = (props)=>{
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:50}}>Friends</Text>
                {/* <Button title='Go' onPress={()=> null}/> */}
            </View>
        </SafeAreaView>
    )
}

export {Friends}