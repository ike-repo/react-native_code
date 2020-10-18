import React, {useState} from'react';
import {View, TextInput, StyleSheet, onChangeText} from 'react-native';

const SearchBar = (props) =>{
    return(
        <View style={styles.searchBar}>
                <TextInput placeholder="Search ..."
                onChangeText={value => props.onChangeText(value)}
                />
              </View>
    )
}
export {SearchBar}


const styles = StyleSheet.create({
    searchBar: {
      backgroundColor: "#eceff1",
      padding: 8,
      margin: 15,
      borderRadius: 10
  }
  })



