import React, {useEffect, useState} from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, Alert, TextInput } from 'react-native'
import productData from './product_data.json'

import {ProductCard} from './components/ProductCard';
import {SearchBar} from './components/SearchBar';


const App = () => {

  const [searchValue, setSearchValue] = useState("");
  const [displayList, setDisplayList] = useState([])

  const renderListItem = ({item}) => <ProductCard product = {item}/>

  useEffect(()=>{
    setDisplayList(productData);
  },[])

  useEffect(()=>{
    const filteredValue =  productData.filter(item=>{
      const text = searchValue.toUpperCase();
      const productTitle = item.title.toUpperCase();

      return productTitle.indexOf(text) > -1
    })
    setDisplayList(filteredValue)
  },[searchValue])
  return (
        <SafeAreaView>
            <View>
              <Text style={styles.banner}>ligthhouse.com</Text>
              <SearchBar onChangeText = {value => setSearchValue(value)}/>
              <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={displayList}
                renderItem={renderListItem}
                numColumns={2}
              />
            </View>
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
  banner:{
    color:'purple',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  },
})