import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'

const ProductScreen = () => {
    return (

        <View style={styles.container}>
            <Image
                source={require('../assets/sm1.png')}
                style={styles.image}
            />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: "auto",
        height: "auto",
    },
});