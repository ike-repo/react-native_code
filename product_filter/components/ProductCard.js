import React from 'react'
import { StyleSheet, View, Dimensions, Image, Text} from 'react-native';

// {product.inStock ? undefined : "Sold Out"}

const ProductCard = ({product}) =>{
    return(
        <View style={styles.container}>
            <Image
            source = {{uri: product.imgURL}}
            style={styles.image}/>
            <View style={styles.label}>
                <Text>{product.title}</Text>
    <Text style={[styles.price, {color: product.inStock ? 'black' : 'red'}]}>{product.inStock ? product.price : "SOLD OUT" }</Text>
  
            </View>
        </View>
    )
}

export {ProductCard}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',

    },
    label:{
        flex:1,
        justifyContent:'space-between'
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
        
    }
})