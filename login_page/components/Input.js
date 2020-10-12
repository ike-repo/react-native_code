import React from 'react';
 import {View, TextInput, StyleSheet, Platform} from 'react-native';

 const Input = ({holder}) =>{
     return(
         <View style={styles.container}>
            <TextInput style={{height:35}}
                placeholder={holder}/>
         </View>
     )
 }

 const styles = StyleSheet.create({
     container:{
         backgroundColor:'#eceff1',
         padding: Platform.OS == 'android' ? 5 : 10,
         marginTop:20,
         borderRadius:10,
         width:340,
         height:50,
         
     }
 })
 export {Input};