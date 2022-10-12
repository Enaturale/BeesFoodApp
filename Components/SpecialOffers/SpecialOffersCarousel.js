import React from 'react';

import { View, Text, Pressable, SafeAreaView,  Image } from 'react-native';

import FontsPage from '../FontsPage/FontsPage';



export default function SpecialOffersCarousel({ item, index }) {
    <FontsPage />
    return (
        <SafeAreaView >
            <Pressable >
                <Text>{item.title}</Text>
                <Image source={{ uri: item.image }} style={{height: 35, width: 35}} />
                <Text style={{fontFamily:"SegoeItalic", fontSize: 15, color:'#FF9B07'}}>${item.price}</Text>
            </Pressable>
        </SafeAreaView>

    )

}