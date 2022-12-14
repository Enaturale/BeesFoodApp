import { Text, View } from 'react-native'
import React from 'react'
import DashStyle from './Styles'

import { useFonts } from 'expo-font';

import Header from '../../Components/Header/Header';

import Searchbar from '../../Components/Searchbar/Searchbar';

import Categories from '../../Components/Categories/Categories';
import FontsPage from '../../Components/FontsPage/FontsPage';

import SpecialOffers from '../../Components/SpecialOffers/SpecialOffers';

function Dashboard() {

//   const [fontsLoaded] = useFonts({
//     SegoeUI: require("../../assets/fonts/Nunito-Black.ttf"),
//     Segoe: require('../../assets/fonts/Nunito-ExtraBold.ttf'),
//     SegoeItalic: require('../../assets/fonts/Nunito-MediumItalic.ttf'),

// })

// if (!fontsLoaded) return null 

<FontsPage />

  return (
    <View style={{  marginVertical: 50,
      marginHorizontal: 20,}}>
      <Header />

      <View>
        <Text style={DashStyle.title}>Hey, Welcome Back. </Text>
      </View>

      <Text style={{fontFamily:'SegoeItalic', fontSize: 16, marginVertical: 5,}}>Want something new?</Text>

      <Searchbar />

      <Categories />

      <View>
        <SpecialOffers />
      </View>


    </View>
  )

}

export default Dashboard;