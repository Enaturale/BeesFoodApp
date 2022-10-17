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

const Stack = createNativeStackNavigator();

import BottomTab from './Navigation/BottomTab'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onboarding"  component={Onboarding} options={{headerShown: false}} />
        <Stack.Screen name="login"  component={Login} options={{headerShown: false}} />
        <Stack.Screen name="register"  component={Register} options={{headerShown: false}} />
        <Stack.Screen name="dashboard"  component={BottomTab} options={{headerShown: false}} />
        <Stack.Screen name="ProfilePae"  component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="Cartpage"  component={Cart} options={{headerShown: false}} />





      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

