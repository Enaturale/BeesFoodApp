import React from 'react';
import {Image,Pressable} from 'react-native'
import logo from '../assets/images/beelogo.png'
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


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

//fonts
import FontsPage from '../Components/FontsPage/FontsPage';

//logo for drawer
import { CustomerDrawer } from './CustomDrawer';



const HomeScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home Page' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Profile Page' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Cart Page' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Categories Page' component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


const CartScreen = () => {
    return (
        <Stack.Navigator initialRouteName='Cart Pge'>
            <Stack.Screen name='Home Pge' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Profile Pge' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='Cart Pge' component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name='Categories Pge' component={CategoriesPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const ProfileScreen = () => {
    return (
        <Stack.Navigator initialRouteName='Profile Pae' >
            <Stack.Screen name='Home Pae' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Profile Pae' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='Cart Pae' component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name='Categories Pae' component={CategoriesPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const CategoriesScreen = () => {
    return (
        <Stack.Navigator initialRouteName='Categories Pag'>
            <Stack.Screen name='Home Pag' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Profle Pag' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='Cart Pag' component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name='Categories Pag' component={CategoriesPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const DrawerTab = () => {
    <FontsPage />
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomerDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: 'black',
                drawerActiveTintColor: '#FF9B07',
                drawerLabelStyle:{
                    fontSize: 20,
                    fontFamily:'Segoe',
                    marginLeft: -20,
                },               
                
            }} >
            <Drawer.Screen
                name="Welcome"
                component={BottomTab}
                options={{
                    drawerIcon: ({ focused }) => {
                        return <MaterialIcons 
                        name='home-filled'
                         size={30} 
                         color={focused ? '#FF9B07' : 'black'}
                         />
                    }
                }}
            />
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return <MaterialIcons 
                        name='category' 
                        size={20} 
                        color={focused ? '#FF9B07' : 'black'}
                         />
                    },
                    drawerStyle:{
                        fontSize: 30,
                    }
                }}
            />
            <Drawer.Screen
                name="Check Cart"
                component={CartScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return <MaterialIcons 
                        name='shopping-cart' 
                        size={30} 
                        color={focused ? '#FF9B07' : 'black'}
                        />
                    }
                }}

            />
            <Drawer.Screen
                name="Profile Page"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ focused }) => {
                        return <MaterialIcons
                            name='person-pin'
                            size={30}
                            color={focused ? '#FF9B07' : 'black'}
                            />
                    }
                }}

            />
        </Drawer.Navigator>
    )
}

export default DrawerTab;