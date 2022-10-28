import React from "react";

import MenuStyle from "./MenuStyle";
import { View, Text } from 'react-native';
import BackButton from "../../Components/BackButton/BackButton";

import FontsPage from "../../Components/FontsPage/FontsPage";

export default function Menu({ navigation }) {
    const goBack = () => {
        navigation.navigate('Dash')
    }

    <FontsPage />

    return (
        <View style={MenuStyle.mainContainer}>
            <View style={MenuStyle.headerContainer}>
                <View>
                    <BackButton data={goBack} />
                </View>

                <View>
                    <Text style={MenuStyle.title}>Menu</Text>
                </View>
            </View>

        </View>
    )
}