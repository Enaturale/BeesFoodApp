import React from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Header = (props ) => {
    const navigation = useNavigation();
    const gotoProfile = () =>{
        return navigation.navigate('Cartpage')
    }
    return (
        <View style={{marginTop: 27, flexDirection:'row', justifyContent:'space-between', width: 340,}}>
             <View >
                <Pressable style={Styles.pressable} onPress={(props) =>navigation.openDrawer() }>
                    <MaterialIcons name="menu" size={40} color='#FF9B07' />
                </Pressable>
            </View>    

            <View>
                <Pressable style={Styles.pressable} onPress={gotoProfile}>
                    <MaterialIcons name="shopping-cart" size={40} color='#FF9B07' />
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

export default Header;