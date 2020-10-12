import React from 'react';
import {SafeAreaView, Platform, ScrollView, KeyboardAvoidingView, View, Image, StyleSheet, Dimensions} from 'react-native';

import {Button, Input} from './components'

const Login = () => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#b2dfdb'}}>
            <KeyboardAvoidingView style={{flex:1}} behavior= {Platform.OS == 'android' ? null : "padding"}>
                <ScrollView style={{flex:1}} bounces='false'>
                    <View style={{flex:1, alignItems:'center'}}>
                        <Image 
                        source={require('./assets/cart.png')}
                        style={styles.logoStyle}/>                
                        <Input holder="Email address"/>
                        <Input holder="Password"/>
                        <Button text="Log In"/>
                        <Button text="Register"/>

                    </View>     
                </ScrollView>             
           </KeyboardAvoidingView>   
        </SafeAreaView> 
    )
}

export default Login;

const styles = StyleSheet.create({
    logoStyle:{
        height: Dimensions.get("window").height / 3,
        resizeMode: 'contain',
        width: Dimensions.get("window").width * 0.5,
        alignItems:'center'
        
    }
})