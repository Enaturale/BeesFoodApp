import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { Pressable, StyleSheet } from 'react-native';


const BackButton = ({data}) => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.navigate('Cartpage')
    }
    return(
        
        <Pressable onPress={data} style={styles.pressable}>
            <MaterialIcons name="arrow-back-ios"  size={26} color='#FF9B07' />
        </Pressable>
        

    )
}
const styles =StyleSheet.create({
    pressable:{

        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        width: 60,
        height: 50,
        borderRadius: 8, 
        backgroundColor:'black',


    }
})
export default BackButton;