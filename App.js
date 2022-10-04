import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Screens/Onboarding/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import Dashboard from './Screens/Dashboard/Dashboard'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="onboarding"  component={Onboarding} options={{headerShown: false}} />
        <Stack.Screen name="login"  component={Login} options={{headerShown: false}} />
        <Stack.Screen name="register"  component={Register} options={{headerShown: false}} />
        <Stack.Screen name="dashboard"  component={Dashboard} options={{headerShown: false}} />


      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

