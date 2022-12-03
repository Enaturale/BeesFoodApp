import { View, Text, Pressable, StyleSheet, Alert, Image } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'

import { getData } from './SpecialData';
import { CartContext } from '../Cart/CartContext';
import BackButton from '../BackButton/BackButton';
import FontsPage from '../FontsPage/FontsPage';

const SpecialProductsDetails = ({ route }) => {
  const { dataId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getData(dataId));
  });

  const AddtoCart = () => {

    addItemToCart(product.id)
    //return(
    // Alert.alert("Add to Cart", item.title + ' has been added to cart', 
    // [
    //     {
    //         text: 'OK',
    //     },
    //     {
    //         text:'Cancel',
    //         style:'cancel'
    //     }

    // ]),

    //)

  }

  <FontsPage />

  return (
    <View style={Styles.container}>

      <View style={Styles.header}>

        <BackButton />
        <Text  style={Styles.mainTitle}>Special Offers</Text>

      </View>

      <View>
        <Image source={{ uri: product.image }} />
      </View>

      <View>
        <Text>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text>${product.price}</Text>
      </View>

      <Pressable onPress={AddtoCart}>
        <Text>Add to Cart</Text>
      </Pressable>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    marginHorizontal: 25,

  },
  header: {
    flexDirection: 'row',
    width: 300,
    justifyContent:'space-between'
  },
  mainTitle:{

  }

})

export default SpecialProductsDetails;