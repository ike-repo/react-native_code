import React from 'react'
import { StyleSheet, View, Dimensions, Image, Text} from 'react-native';


const ProductCard = ({product}) =>{
    return(
        <View style={styles.container}>
            <Image
                source = {{uri: product.imgURL}}
                style={[styles.image,{opacity: product.inStock ? 1 : 0.2}]}/>
                <Text style={{color: product.inStock ? 'black' : 'lightgray'}}>{product.title}</Text>
            <View style={styles.label}>
                <Text style={[styles.price, {color: product.inStock ? 'black' : 'gray'}]}>{product.price}</Text>
                <Text style={styles.soldout}>
                {product.inStock ? undefined : "SOLD OUT"}
                </Text>
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
        flexDirection:'row',
        justifyContent:'space-between',
    },
    price:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    soldout:{
    color: 'red',
    }
})