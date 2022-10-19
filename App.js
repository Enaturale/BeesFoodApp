import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Screens/Onboarding/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import Dashboard from './Screens/Dashboard/Dashboard'; 
import Profile from './Screens/Profile/Profile';
import Cart from './Screens/Cart/Cart'

import Test from './Screens/Test/Test';

const Stack = createNativeStackNavigator();

import BottomTab from './Navigation/BottomTab'
import DrawerTab from './Navigation/DrawerTab';

import 'react-native-gesture-handler'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onboarding"  component={Onboarding} options={{headerShown: false}} />
        <Stack.Screen name="login"  component={Login} options={{headerShown: false}} />
        <Stack.Screen name="register"  component={Register} options={{headerShown: false}} />
        <Stack.Screen name="dashboard"  component={DrawerTab} options={{headerShown: false}} />
        <Stack.Screen name="ProfilePae"  component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="Cartpage"  component={Cart} options={{headerShown: false}} />
        <Stack.Screen name="Test"  component={Test} />






      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

