import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux'

const Component_A = (props) =>{
    const myCounter = useSelector(globalState => globalState.counter);
    const dispatch = useDispatch();
    return(
        <View style= {{backgroundColor:'#fdffb6', flex: 1}}>
            <Text>Component_A</Text>
            <Text style={{fontSize:100, alignSelf:'center'}}>{myCounter}</Text>
            <Button 
                title="UP"
                onPress={() => dispatch({type: "INCREASE_COUNTER"})}
            />
             <Button 
                title="DOWN"
                onPress={() => dispatch({type: "DECREASE_COUNTER"})}
            />
             <Button 
                title="Update Username"
                onPress={() => dispatch({
                    type:"SET_USERNAME",
                    payload:{
                        newUserName: "ike"
                    }    
                })}
             />
        </View>
    )
}

export default Component_A;