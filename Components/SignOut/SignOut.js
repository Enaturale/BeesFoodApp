import React from 'react';

import {View, Text, Pressable, StyleSheet} from 'react-native'

import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase-config';

import { signOut } from 'firebase/auth';

import { useNavigation } from '@react-navigation/native';

const SignOut = () =>{
    const navigation = useNavigation();

    const Logout = () =>{
        navigation.navigate('login')
    }
    return(
        <View>
            <Pressable onPress={Logout}>
                <Text>Sign Out</Text>
            </Pressable>
        </View>
    )
}

export default SignOut;