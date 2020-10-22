import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const First = (props)=>{
    const [user, setUser] = useState("");
    return(
        <SafeAreaView>
            <View>
                <Text style={{fontSize:20}}>First Page Header</Text>
                <Text>Typed:{user}</Text>

                <TextInput style={{backgroundColor:'lightgray', padding:10, margin:10}}
                    value={user}
                    placeholder="Enter name"
                    onChangeText={text=>setUser(text)}
                />
               <Button
                    title='Submit'
                    onPress={() => 
                    props.navigation.navigate('SecondPage', {entered : user})}/>
            </View>
        </SafeAreaView>
    )
} 
export default First;