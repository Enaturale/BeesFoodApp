import React from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function Searchbar(){
    return(
        <View style={{marginTop: 20}}>
            <Pressable style={Styles.pressable}>
                <MaterialIcons name="search" size={25} color='#FF9B07' style={Styles.search} />

            </Pressable>
        </View>

    )
}

const Styles = StyleSheet.create({
    pressable:{
        width: 340,
        height: 45,
        borderWidth:2,
        borderRadius: 15,
        borderColor:'black',
        justifyContent:'center',
        marginBottom: 10,
        
    },
    search:{
        marginHorizontal:20,

    }
})