import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {CityItem, SearchBar} from '../components'

let originalList = [];

const CityList = (props) =>{
    const [isLoading, setLoading] = useState(false);
    const [cityList, setCityList] = useState([]);
 
    const fetchCityData = async () => {
        setLoading(true);
        const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
        setCityList(data.cities);
        originalList = [...data.cities];
        setLoading(false);
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
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                { isLoading ? 
                <View style={{ flex:1, justifyContent: 'center', alignItems:'center'}}> 
                    <ActivityIndicator size='large'/>
                </View>
                :
                <CityItem item = {cityList}/>
                }
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