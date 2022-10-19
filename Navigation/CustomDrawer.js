import React from 'react'

import {Image, Pressable, View} from 'react-native'
import logo from '../assets/images/beelogo.png'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export const CustomerDrawer = props => {
    return(
        <DrawerContentScrollView {...props}>
            <Pressable style={{height: 200, width: 200}}>
                <Image source={logo} style={{height: 200, width: 200}} />
            </Pressable>
            <View>
                <DrawerItemList {...props} />
            </View>
            
        </DrawerContentScrollView>

    )
}