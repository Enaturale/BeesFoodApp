import React from 'react';

import {createDrawerNavigator} from "@react-navigation/drawer"


import Profile from "../Screens/Profile/Profile";
import Cart from "../Screens/Cart/Cart";
import CategoriesPage from "../Screens/CategoriesPage/CategoriesPage";

import Dashboard from "../Screens/Dashboard/Dashboard";
import BottomTab from "./BottomTab";
// const Drawer = createDrawerNavigator({
//     Profile,
//     Cart,
//     CategoriesPage
// });
const Drawer = createDrawerNavigator();

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


const HomeScreen = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home Page' component={Dashboard}  options={{ headerShown: false }} />
            <Stack.Screen name='Profile Page' component={Dashboard}  options={{ headerShown: false }} />
            <Stack.Screen name='Cart Page' component={Dashboard}  options={{ headerShown: false }} />
            <Stack.Screen name='Categories Page' component={Dashboard}  options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


const CartScreen = () => {
    return(
        <Stack.Navigator initialRouteName='Cart Page'>
            <Stack.Screen name='Home Pge' component={Dashboard}  options={{ headerShown: false }} />
            <Stack.Screen name='Profile Pge' component={Profile}  options={{ headerShown: false }} />
            <Stack.Screen name='Cart Pge' component={Cart}  options={{ headerShown: false }} />
            <Stack.Screen name='Categories Pge' component={CategoriesPage}  options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const ProfileScreen = () => {
    return(
        <Stack.Navigator initialRouteName='Profile Page' >
            <Stack.Screen name='Home Pae' component={Dashboard}  options={{ headerShown: false }} />
            <Stack.Screen name='Profile Pae' component={Profile}  options={{ headerShown: false }} />
            <Stack.Screen name='Cart Pae' component={Cart}  options={{ headerShown: false }} />
            <Stack.Screen name='Categories Pae' component={CategoriesPage}  options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const CategoriesScreen = () => {
    return(
        <Stack.Navigator initialRouteName='Categories Page'>
            <Stack.Screen name='Home Pag' component={Dashboard}  options={{ headerShown: false }} />
            <Stack.Screen name='Profle Pag' component={Profile}  options={{ headerShown: false }} />
            <Stack.Screen name='Cart Pag' component={Cart}  options={{ headerShown: false }} />
            <Stack.Screen name='Categories Pag' component={CategoriesPage}  options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const DrawerTab = () => {
    return(
        <Drawer.Navigator options={{ headerShown: false }}>
            <Drawer.Screen name="Welcome"  component={BottomTab} />
            <Drawer.Screen name="Categories"  component={CategoriesScreen} />
            <Drawer.Screen name="Check Cart" component={CartScreen} />
            <Drawer.Screen name="Profile Page" component={ProfileScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerTab;