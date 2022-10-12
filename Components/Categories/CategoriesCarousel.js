import React from 'react';

import { View, Text, Pressable, SafeAreaView,  Image } from 'react-native';
import categoriesStyle from './categoriesStyle';
import FontsPage from '../FontsPage/FontsPage';



export default function CategoriesCarousel({ item, index }) {
    <FontsPage />
    return (
        <SafeAreaView style={categoriesStyle.view}>
            <Pressable style={categoriesStyle.pressable}>
                <Image source={{ uri: item.image }} style={{height: 35, width: 35}} />
                <Text style={{fontFamily:"SegoeItalic", fontSize: 15, color:'#FF9B07'}}>{item.title}</Text>
            </Pressable>
        </SafeAreaView>

    )

}