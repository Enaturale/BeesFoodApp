import React from "react";

import CartStyle from "./CartStyle";
import { View, Text } from 'react-native';
import BackButton from "../../Components/BackButton/BackButton";

import FontsPage from "../../Components/FontsPage/FontsPage";

export default function Cart({ navigation }) {
    const goBack = () => {
        navigation.navigate('Dash')
    }

    <FontsPage />

    return (
        <View style={CartStyle.mainContainer}>
            <View style={CartStyle.headerContainer}>
                <View>
                    <BackButton data={goBack} />
                </View>

                <View>
                    <Text style={CartStyle.title}>My Cart</Text>
                </View>
            </View>

        </View>
    )
}