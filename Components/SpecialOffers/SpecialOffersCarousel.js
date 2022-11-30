import React from 'react';

import { View, Text, Pressable, SafeAreaView, Image, Alert } from 'react-native';

import FontsPage from '../FontsPage/FontsPage';

import SpecialStyles from './SpecialStyles';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export const SpecialOffersCarousel = ({ item, index, navigation }) =>{    

    <FontsPage />

    const AddtoCart = () => {
        return(
            Alert.alert("Add to Cart", item.title + ' has been added to cart', 
            [
                {
                    text: 'OK',
                },
                {
                    text:'Cancel',
                    style:'cancel'
                }
                
            ])
        )

    }

   

    return (
        <SafeAreaView style={SpecialStyles.container} >
            <Pressable style={SpecialStyles.pressable} onPress={(props) => navigation.navigate('SpecialPage')} >
                <View style={{ alignItems: 'center', width: 150, }}>
                    <Text style={SpecialStyles.title}>{item.title}</Text>
                </View>

                <View style={{ alignItems: 'center', width: 150, }}>
                    <Image source={{ uri: item.image }} style={{ height: 50, width: 50, marginVertical: 15, }} />
                </View>

                <View style={{ flexDirection: 'row', width: 130, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontFamily: "SegoeItalic", fontSize: 15, color: '#FF9B07', marginLeft: 20, }}>
                            ${item.price}
                        </Text>
                    </View>
                    <View>
                        <Pressable >
                            <MaterialIcons name='shopping-cart' color='#FF9B07' size={20} />
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </SafeAreaView>

    )

}