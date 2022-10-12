import React from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Header() {
    return (
        <View style={{marginTop: 15, flexDirection:'row', justifyContent:'space-between', width: 340,}}>
            <View >
                <Pressable style={Styles.pressable}>
                    <MaterialIcons name="menu" size={40} color='#FF9B07' />
                </Pressable>
            </View>

            <View>
                <Pressable style={Styles.pressable}>
                    <MaterialIcons name="person" size={40} color='#FF9B07' />
                </Pressable>              

            </View>

        </View>

    )
}

const Styles = StyleSheet.create({
    pressable:{
        height: 50, 
        width: 60, 
        borderWidth: 1, 
        borderRadius: 8, 
        backgroundColor:'black',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})