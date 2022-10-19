import React from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
// import {createDrawerNavigator} from "@react-navigation/drawer"
// // import {createAppContainer} from '@react-navigation'

// // import Profile from "../Screens/Profile/Profile";
// // import Cart from "../Screens/Cart/Cart";
// // import CategoriesPage from "../Screens/CategoriesPage/CategoriesPage";

// import Profile from '../../Screens/Profile/Profile';
// import Cart from '../../Screens/Cart/Cart';
// import CategoriesPage from '../../Screens/CategoriesPage/CategoriesPage';

// const Drawer = createDrawerNavigator({
//     Profile,
//     Cart,
//     CategoriesPage
// });
// const Drawer = createDrawerNavigator();
// const DrawerTab = () => {
//     return(
//         <Drawer.Navigator>
//             <Drawer.Screen name="Categ"  component={CategoriesPage} />
//             <Drawer.Screen name="Cartio" component={Cart} />
//             <Drawer.Screen name="prof" component={Profile}/>
//         </Drawer.Navigator>
//     )
// }

const Header = (props ) => {
    const navigation = useNavigation();
    const gotoProfile = () =>{
        return navigation.navigate('Profile')
    }
    return (
        <View style={{marginTop: 27, flexDirection:'row', justifyContent:'space-between', width: 340,}}>
             <View >
                <Pressable style={Styles.pressable} onPress={(props) =>navigation.openDrawer() }>
                    <MaterialIcons name="menu" size={40} color='#FF9B07' />
                </Pressable>
            </View>    

            <View>
                <Pressable style={Styles.pressable} onPress={gotoProfile}>
                    <MaterialIcons name="person" size={40} color='#FF9B07' />
                </Pressable>              

            </View>

        </View>

    )
}

const Styles = StyleSheet.create({
    pressable:{
        height: 50, 
        width: 60, 
        borderWidth: 1, 
        borderRadius: 8, 
        backgroundColor:'black',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})

export default Header;