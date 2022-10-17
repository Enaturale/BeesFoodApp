import React from 'react'

import { View, Text, Pressable } from 'react-native'
import BackButton from '../../Components/BackButton/BackButton'

import ProfileStyle from './ProfileStyle'

import FontsPage from '../../Components/FontsPage/FontsPage'

export default function Profile({ navigation }) {
    const goBack = () => {
        navigation.navigate('Dash')
    }

   <FontsPage />

    return (
        <View style={ProfileStyle.mainContainer}>

            <View style={ProfileStyle.headerContainer}>
                <View>
                    <BackButton data={goBack} />
                </View>

                <View >
                    <Text style={ProfileStyle.title}>My Profile</Text>
                </View>
            </View>


        </View>
    )
}