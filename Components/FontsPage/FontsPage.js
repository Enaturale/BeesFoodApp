import { Text, View } from 'react-native'
import React from 'react'

import { useFonts } from 'expo-font';

const FontsPage =() => {
    const [fontsLoaded] = useFonts({
        SegoeUI: require("../../assets/fonts/Nunito-Black.ttf"),
        Segoe: require('../../assets/fonts/Nunito-ExtraBold.ttf'),
        SegoeItalic: require('../../assets/fonts/Nunito-MediumItalic.ttf'),
    
    })
    
    if (!fontsLoaded) return null 
}

export default FontsPage;