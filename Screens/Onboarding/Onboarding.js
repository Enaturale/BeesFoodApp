import React from 'react';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/images/beelogo.png'

import { useFonts } from 'expo-font';

export default function Onboarding({navigation}){
    const [fontsLoaded] = useFonts({
        SegoeUI: require("../../assets/fonts/Nunito-Black.ttf")
    
      })
    
      if(!fontsLoaded) return null

      const gotoLogin =()=> {
        return navigation.navigate('login')
      }

      return (
        <LinearGradient
          colors={[ "#F6D4A0",'#FF9B07',]}
          // locations={[0.3, 0.8]}
          style={styles.linear}
        >
          <View style={styles.container}>
            <Image source={logo} style={{width: 270, height: 270, marginBottom: -100}} />
            <Pressable
               style={styles.pressable}
               onPress={gotoLogin}
               >
              <Text style={{fontSize: 22, color:'white', fontFamily:'SegoeUI' }}>Get Started</Text>
            </Pressable>
          </View>
    
        </LinearGradient>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      linear: {
        height: 810,
        width: 400,
      },
      pressable:{
        borderWidth: 1,
        height: 70,
        width: 250,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 100,
        backgroundColor:'black',
        marginHorizontal: 20,
      }
    });
    