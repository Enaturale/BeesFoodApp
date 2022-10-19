import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Pressable, Image, ImageBackground , Modal} from 'react-native';
import styles from './Styles';

import { useFonts } from 'expo-font';

import {getAuth, createUserEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase-config';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence } from 'firebase/auth/react-native';

// const  background = {}



const Login = ({navigation}) => {

     const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app  );

    const signInUser =() => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('User Found');
            alert("Welcome back " + email)
            navigation.navigate('dashboard');

        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged((user) => {
           if (user){
             navigation.navigate('dashboard');
           }
     
         })
         return unsubscribe
       }, [])

    const [fontsLoaded] = useFonts({
        SegoeUI: require("../../assets/fonts/Nunito-Black.ttf"),
        Segoe: require('../../assets/fonts/Nunito-ExtraBold.ttf'),
        SegoeItalic: require('../../assets/fonts/Nunito-MediumItalic.ttf'),
    })

    if (!fontsLoaded) return null

    const gotoRegisterPage = () =>{
        return navigation.navigate('register')
    }

   

 

    return (
        <View style={styles.container} >
           

            <Text style={styles.title}>
                Login
            </Text>

            <Text style={{fontFamily:'SegoeItalic', fontSize: 18, marginTop: 10}}>
                Hey! Welcome Back.
            </Text>

            <View style={{flexDirection:'row'}}>
                <Pressable style={styles.pressable}>
                    <Image source={require('../../assets/images/facebook.png')} 
                       style={{height: 35, width:35}} />
                </Pressable>

                <Pressable style={styles.pressable}>
                <Image source={require('../../assets/images/google.png')} 
                       style={{height: 35, width:35}} />
                </Pressable> 

                <Pressable style={styles.pressable}>
                <Image source={require('../../assets/images/twitter.png')} 
                       style={{height: 35, width:35}} />
                </Pressable>
            </View>

            <View>
                <View>
                    <TextInput
                        placeholder='    example@gmail.com'
                        style={styles.input}   
                        keyboardType='email-address'  
                        onChangeText={(text) => setEmail(text)}   
                    />
                </View>

                <View>
                    <TextInput
                        placeholder='    ***********'
                        secureTextEntry
                        style={styles.input}
                        keyboardType='default'
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View style={{ marginTop: 29, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'SegoeItalic', fontSize: 19 }}>Forgot Password?</Text>
                </View>
            </View>

            <View style={{ marginTop: 30, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.button} onPress={signInUser}  > 
                    <Text style={{ fontFamily: 'SegoeUI', fontSize: 25, color: "#FF9B07" }}>Login</Text>
                </Pressable>
            </View>            

            <View style={{ marginTop: 30, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.buttonReg} onPress={gotoRegisterPage}>
                    <Text style={{ color: 'black', fontFamily: 'Segoe', fontSize: 25 }}>Register</Text>
                </Pressable>
            </View>

         
        </View>
    )

}

export default Login;