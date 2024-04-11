import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const ProductScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/sm1.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <View style={styles.column}>
                    <Text style={styles.textBlack}>улица аделя кутуя, 82</Text>
                    <Text style={styles.textGray}>Доставка 15 минут</Text>
                </View>
                <Text style={{ fontSize: 35 }}>🧑🏼‍🦱</Text>
            </View>
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    textContainer: {
        position: "absolute",
        top: 90,
        left: 0,
        right: 0,
        paddingHorizontal: 16,
        paddingBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    column: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 4
    },
    textGray: {
        color: "#595959",
        fontSize: 20,
        fontWeight: "700",
    },
    textBlack: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
    },
});
