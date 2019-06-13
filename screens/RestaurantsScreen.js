import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Restaurants } from '../components/Restaurants'

export default function RestaurantsScreen() {
    return (
        <Restaurants />
    )
}

RestaurantsScreen.navigationOptions = {
    title: 'Restaurants',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})