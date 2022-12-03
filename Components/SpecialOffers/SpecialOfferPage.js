import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import BackButton from '../BackButton/BackButton'
import FontsPage from '../FontsPage/FontsPage';
import { useNavigation } from '@react-navigation/native';




export const SpecialOfferPage = ({item: dataitem}) =>{
    const navigation = useNavigation();

    <FontsPage />

    const gotoBack=()=>{
       return navigation.navigate('dashboard')

    }
    return(
        <View style={styles.container}>
            <View>
                <BackButton data={gotoBack}/>
                <Text>Special Offer Page</Text>
            </View> 

                    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginTop: 40,
    }

})