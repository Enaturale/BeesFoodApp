import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Dashboard from '../Screens/Dashboard/Dashboard';
import Cart from '../Screens/Cart/Cart';
import Profile from '../Screens/Profile/Profile';
import Menu from '../Screens/Menu/Menu';

import FontsPage from '../Components/FontsPage/FontsPage';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function DashboardScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dash" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='menufood' component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name='Profiled' component={Profile} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

function MenuScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MenuPage" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name='welcomepage' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='profileage' component={Profile} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

function ProfileScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfilePage" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='welcompage' component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name='Menus' component={Menu} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}


export default function BottomTab() {
    <FontsPage />
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FF9B07',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'black',
                    height: 90,
                    borderTopEndRadius: 40,
                    borderTopStartRadius: 40,
                },
                tabBarLabelStyle: {
                    fontSize: 17,
                    marginBottom: 15,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name='home'
                            size={23}
                            color={focused ? '#FF9B07' : 'white'}
                            style={{ marginTop: 15, fontFamily: 'Segoe' }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={MenuScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name='restaurant-menu'
                            size={23}
                            color={focused ? '#FF9B07' : 'white'}
                            style={{ marginTop: 15, fontFamily: 'Segoe' }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name='person'
                            size={23}
                            color={focused ? '#FF9B07' : 'white'}
                            style={{ marginTop: 15, fontFamily: 'Segoe' }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}