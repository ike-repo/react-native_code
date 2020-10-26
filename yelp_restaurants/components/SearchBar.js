import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = (props) => {
    return(
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={(value) => props.onSearch(value)}
            />
        </View>
    )
}

export {SearchBar}

const styles = StyleSheet.create({
    container:{
        margin:10,
        padding:10,
        backgroundColor:'#e0e0e0',
        borderRadius:5,        
    }
})