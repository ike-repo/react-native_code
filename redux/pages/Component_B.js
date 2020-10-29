import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const Component_B = (props) =>{
    const theCounter = useSelector(theGlobalState => theGlobalState.counter);
    const userNameFromStore = useSelector(theName => theName.userName)
    return(
        <View style={{backgroundColor:'#ffadad', flex:1}}>
            <Text>Component_B</Text>
            <Text style={{fontSize:100, alignSelf:'center'}}>{theCounter}</Text>
            <Text style={{fontSize:100, alignSelf:'center'}}>{userNameFromStore}</Text>
        </View>
    )
} 

export default Component_B;