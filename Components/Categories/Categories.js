import React from 'react';

import { View, Text, Pressable, SafeAreaView } from 'react-native';
import categoriesStyle from './categoriesStyle';

import Carousel from 'react-native-snap-carousel';
import CategoriesCarousel from './CategoriesCarousel';
import FontsPage from '../FontsPage/FontsPage';

import { useNavigation } from '@react-navigation/native';


const data = [
    {
        id: '1',
        image: 'https://cdn.pixabay.com/photo/2021/08/21/23/55/pizza-6563825__340.png',
        title: 'Pizza',
        types:'20 types'
    },
    {
        id: '2',
        image: 'https://cdn.pixabay.com/photo/2020/10/22/08/56/donut-5675340__340.png',
        title: 'Snacks',
        types:'20 types'
    },
    {
        id: '3',
        image: 'https://cdn.pixabay.com/photo/2021/05/14/23/35/breakfast-6254633__340.png',
        title: 'Salads',
        types:'20 types'
    },
    {
        id: '4',
        image: 'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424__340.png',
        title: 'Light Meals',
        types:'20 types'
    },
    {
        id: '5',
        image: 'https://cdn.pixabay.com/photo/2012/04/14/14/29/wine-34125__340.png',
        title: 'Drinks',
        types:'20 types'
    }

]

const SLIDER_WIDTH = 340;
const ITEM_WIDTH = 100;

export default function Categories() {
    const navigation = useNavigation();

    <FontsPage />

    const isCarousel = React.useRef(null)

    const gotoCategoriesPage = () => {
        navigation.navigate('CategoriesPage');
    }



    return (
        <SafeAreaView style={categoriesStyle.container}>
            <View style={{ flexDirection: 'row', width: 320, justifyContent: "space-between" }}>
                <Text style={categoriesStyle.title}>Categories</Text>
                <Pressable onPress={gotoCategoriesPage}>
                    <Text style={{ fontFamily: 'SegoeItalic' }}>See all</Text>
                </Pressable>
            </View>

            <Carousel
                layout='default'
                ref={isCarousel}
                data={data}
                renderItem={CategoriesCarousel}
                useScrollView={true}
                hasParallaxImages={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
            />
        </SafeAreaView>
    )
}