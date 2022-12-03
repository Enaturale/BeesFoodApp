import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { CartContext } from './CartContext';

import Cartionicon from '@expo/vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native';

export function CartIcon(){
    const {getItemsCount} = useContext(CartContext);

    const navigation = useNavigation();

    return(
        <View>
            <Pressable onPress={() => {
                navigation.navigate('Cart')
            }}>
                <Cartionicon color="black" size={20} data={getItemsCount()} />                
            </Pressable>

        </View>
    )
}