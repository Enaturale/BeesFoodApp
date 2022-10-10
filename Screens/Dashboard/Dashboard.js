import { Text, View } from 'react-native'
import React from 'react'
import DashStyle from './Styles'

import { useFonts } from 'expo-font';


function Dashboard() {

  const [fontsLoaded] = useFonts({
    SegoeUI: require("../../assets/fonts/Nunito-Black.ttf"),
    Segoe: require('../../assets/fonts/Nunito-ExtraBold.ttf'),
    SegoeItalic: require('../../assets/fonts/Nunito-MediumItalic.ttf'),

})

if (!fontsLoaded) return null 

  return (
    <View style={DashStyle.container}>
      <View>
        <Text style={DashStyle.title}>Hey, Welcome Back. </Text>
      </View>


    </View>
  )

}

export default Dashboard;