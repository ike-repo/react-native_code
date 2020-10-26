import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, Dimensions, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RestaurantDetail = (props) => {
    const {selectedRestaurant} = props.route.params;
    
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>
                <Image
                    style={styles.image}
                    source={{ uri: selectedRestaurant.image_url }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
                </View>
                <View>
                    <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => {Linking.openURL("https://www.opentable.com/");}}>
                        <Text style={styles.buttonText}>Reserve</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetail};

const styles = StyleSheet.create({
    container: { 
        flex: 1, padding: 10 
    },
    name: { 
        fontWeight: '300', 
        fontSize: 30 
    },
    image: { 
        height: Dimensions.get('window').height / 3 
    },
    infoContainer: {
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoText: { 
        color: 'white', 
        fontWeight: 'bold' 
    },
    button:{
        padding:10,
        backgroundColor: '#15b6f6',
        margin:85, 
        borderRadius:5
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }
})