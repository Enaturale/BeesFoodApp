import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function BottomTabBar(){
    return(
        <Tab.Navigator>
        </Tab.Navigator>
    )
}