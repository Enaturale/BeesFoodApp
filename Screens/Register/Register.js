import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from '../Login/Styles';

import { useFonts } from 'expo-font';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase-config';


const Register = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
     

    const createUserAccount =() => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('USer Created');
            alert("User Account Created")
            navigation.navigate('dashboard');

        }).catch(error => {
            console.log(error)
        })
    }



    const [fontsLoaded] = useFonts({
        SegoeUI: require("../../assets/fonts/Nunito-Black.ttf"),
        Segoe: require('../../assets/fonts/Nunito-ExtraBold.ttf'),
        SegoeItalic: require('../../assets/fonts/Nunito-MediumItalic.ttf'),

    })

    if (!fontsLoaded) return null

    const gotoLoginPage = () =>{
        return navigation.navigate('login')
    }
    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Register
            </Text>
            <Text style={{fontFamily:'SegoeItalic', fontSize: 18, marginTop: 10}}>
                We need a few details please!
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

                
            </View>

            <View style={{ marginTop: 30, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.button} onPress={createUserAccount}>
                    <Text style={{ fontFamily: 'SegoeUI', fontSize: 25, color: "#FF9B07" }}>Register</Text>
                </Pressable>
            </View> 

            <View style={{ marginTop: 29, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'SegoeItalic', fontSize: 19 }}>Already have an account?</Text>
                </View>           

            <View style={{ marginTop: 30, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.buttonReg} onPress={gotoLoginPage}>
                    <Text style={{ color: 'black', fontFamily: 'Segoe', fontSize: 25 }}>Login</Text>
                </Pressable>
            </View>


        </View>
    )

}

export default Register;