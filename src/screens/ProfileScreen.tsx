import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.containerFull}>
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    containerFull: {
        flex: 1,
        padding: 10
    },
})