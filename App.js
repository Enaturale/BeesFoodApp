import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Screens/Onboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import Dashboard from './Screens/Dashboard/Dashboard';
import Profile from './Screens/Profile/Profile';
import Cart from './Screens/Cart/Cart';
import Menu from './Screens/Menu/Menu';
import CategoriesPage from './Screens/CategoriesPage/CategoriesPage';
import { SpecialOfferPage } from './Components/SpecialOffers/SpecialOfferPage';
import CheckFullCategory from './Components/Categories/CheckFullCategory';
import SpecialProductsDetails from './Components/SpecialOffers/SpecialProductsDetails';

import Test from './Screens/Test/Test';

const Stack = createNativeStackNavigator();

import BottomTab from './Navigation/BottomTab'
import DrawerTab from './Navigation/DrawerTab';


import 'react-native-gesture-handler'

import { CartProvider } from './Components/Cart/CartContext';


export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" component={DrawerTab} options={{ headerShown: false }} />
          <Stack.Screen name="ProfilePae" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Cartpage" component={Cart} options={{ headerShown: false }} />
          <Stack.Screen name="Menupage" component={Menu} options={{ headerShown: false }} />
          <Stack.Screen name="CategoriesPage" component={CategoriesPage} options={{ headerShown: false }} />
          <Stack.Screen name="SpecialPage" component={SpecialOfferPage} options={{ headerShown: false }} />
          <Stack.Screen name='CheckFullCategory' component={CheckFullCategory} options={{ headerShown: false }} />
          <Stack.Screen name='ProductDetails' component={SpecialProductsDetails} options={{ headerShown: false }} />
          <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>

  );
}

