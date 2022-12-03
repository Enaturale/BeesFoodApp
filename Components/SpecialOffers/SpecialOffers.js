import React, { useEffect, useState } from 'react';

import { View, Text, Pressable, SafeAreaView } from 'react-native';


import Carousel from 'react-native-snap-carousel';

import FontsPage from '../FontsPage/FontsPage';

import { SpecialOffersCarousel } from './SpecialOffersCarousel';

import SpecialStyles from './SpecialStyles';
import { useNavigation } from '@react-navigation/native';

import { getDataItem } from './SpecialData';



const SLIDER_WIDTH = 340;
const ITEM_WIDTH = 170;

export default function SpecialOffers() {
    const navigation = useNavigation();

    <FontsPage />
    const isCarousel = React.useRef(null)




    function renderProduct({ item: data }) {
        return (
            <SpecialOffersCarousel {...data}
                onPress={() => {
                    navigation.navigate('ProductDetails', { dataId: data.id })
                }}

            />
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getDataItem());
    });




    return (
        <SafeAreaView style={{ marginTop: 20, }}>
            <Text style={SpecialStyles.mainTitle}>Special Offers</Text>
            <Carousel
                layout='default'
                ref={isCarousel}
                data={products}
                renderItem={renderProduct}
                useScrollView={true}
                hasParallaxImages={true}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}