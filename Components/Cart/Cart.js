import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

export function Cart({navigation}){

    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

    function Totals(){
        let [total, setTotal] = useState(0);

        useEffect(() => {
            setTotal(getTotalPrice());
        });

        return(
            <View>
                <Text>Total</Text>
                <Text>${total}</Text>
            </View>
        );
    }

    function renderItem({item}){
        return(
            <View>
                <Text>{item.product.name} x {item.qty}</Text>
                <Text>${item.totalPrice}</Text>
            </View>
        )
    }

    return(
        <FlatList
           data={items}
           renderItem={renderItem}
           ListFooterComponent={Totals}
           keyExtractor={(item) => item.product.id.toString()}
         />
    )

}