import React from 'react';

import { View, Text, Pressable, SafeAreaView } from 'react-native';


import Carousel from 'react-native-snap-carousel';

import FontsPage from '../FontsPage/FontsPage';

import {SpecialOffersCarousel} from './SpecialOffersCarousel';

import SpecialStyles from './SpecialStyles';

const data = [
    {
        id: '1',
        image: 'https://cdn.pixabay.com/photo/2021/08/21/23/55/pizza-6563825__340.png',
        title: 'Pepperoni Pizza',
        price: '2000',
    },
    {
        id: '2',
        image: 'https://cdn.pixabay.com/photo/2020/10/22/08/56/donut-5675340__340.png',
        title: 'Round Doughnut',
        price: '1000',

    },
    {
        id: '3',
        image: 'https://cdn.pixabay.com/photo/2021/05/14/23/35/breakfast-6254633__340.png',
        title: 'Fruit Salad',
        price: '2000',

    },
    {
        id: '4',
        image: 'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424__340.png',
        title: 'Turkey Sandwich',
        price: '2000',

    },
    {
        id: '5',
        image: 'https://cdn.pixabay.com/photo/2012/04/14/14/29/wine-34125__340.png',
        title: 'Fruit by Bee',
        price: '2000',

    }

]

const SLIDER_WIDTH = 340;
const ITEM_WIDTH = 170;

export default function SpecialOffers() {

    <FontsPage />
  const isCarousel = React.useRef(null)

  

    return (
        <SafeAreaView style={{marginTop: 20,}}>
            <Text style={SpecialStyles.mainTitle}>Special Offers</Text>
            <Carousel
                layout='default'
                ref={isCarousel}
                data={data}
                renderItem={SpecialOffersCarousel}
                useScrollView={true}
                hasParallaxImages={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
            />
        </SafeAreaView>
    )
}