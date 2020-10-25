import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {CityItem, SearchBar} from '../components'

let originalList = [];

const CityList = (props) =>{
    const [cityList, setCityList] = useState([]);
 
    const fetchCityData = async () => {
        const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
        setCityList(data.cities);
        originalList = [...data.cities];
    }

    useEffect(()=>{
        fetchCityData();
    }, [])

const renderCities = ({item}) => {
    return(
        <CityItem 
        cityName = {item} 
        onSelect = {() => props.navigation.navigate('Restaurants', {selectedCity : item})}
        />
    )
}

const renderSeperator = () => <View style={{ borderWidth: 1, borderColor:'#e0e0e0'}}/>

function searchCity(search) {
    const filteredCityNames = originalList.filter(city => {
        const text = search.toUpperCase();
        const cityName = city.toUpperCase();

        return cityName.indexOf(text) > -1;
})
    setCityList(filteredCityNames)
}  

    return(
        <SafeAreaView>
            <View>
                <SearchBar 
                    placeholder = 'Search city ...'
                    onSearch={(value) => searchCity(value)}
                />
                <FlatList
                    keyExtractor = {(_, index) => index.toString()}
                    data={cityList}
                    renderItem={renderCities}
                    ItemSeparatorComponent={renderSeperator}
                />
            </View>
        </SafeAreaView>
    )
}

export {CityList};