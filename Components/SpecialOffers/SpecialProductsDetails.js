import { View, Text, Pressable, StyleSheet, Alert, Image } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'

import { getData } from './SpecialData';
import { getTitle } from './SpecialData';
import { CartContext } from '../Cart/CartContext';
import BackButton from '../BackButton/BackButton';
import FontsPage from '../FontsPage/FontsPage';

import { useNavigation } from '@react-navigation/native';

const SpecialProductsDetails = ({ route }) => {
  const navigation = useNavigation();

  const { dataId } = route.params;


  const [product, setProduct] = useState({});
  const [titlename, setTitle] =useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getData(dataId));
  });

  useEffect(() => {
    setTitle(getTitle());
  })

  const AddtoCart = () => {

    addItemToCart(product.id)
    //return(
    Alert.alert("Add to Cart", 'Product has been added to cart. Check Cart.', 
    [
        {
            text: 'OK',
        },
        {
            text:'Cancel',
            style:'cancel'
        }

    ])
    navigation.navigate('Cart')

    //)
  

  }

  <FontsPage />


  const goBack = () => {
    return navigation.navigate('dashboard')

  }

  return (
    <View style={Styles.container}>

      <View style={Styles.header}>

        <BackButton data={goBack} />
        <Text style={Styles.mainTitle}>Special Offers</Text>

      </View>

      <View>
        <View style={{ width: 300, height: 250, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: product.image }} style={Styles.image} />
        </View>

        <View>
          <Text style={Styles.productTitle}>{product.title}</Text>
          <Text style={Styles.desc}>{product.description}</Text>
          <Text style={Styles.price}>${product.price}</Text>
        </View>

        <View style={{width: 300, alignItems:'center', marginTop: 20,}}>
          <Pressable onPress={AddtoCart} style={Styles.addCartButton}>
            <Text style={Styles.addCartText}>Add to Cart</Text>
          </Pressable>
        </View>


      </View>
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  mainTitle: {
    fontFamily: 'Segoe',
    fontSize: 25,
    marginTop: 4,

  },
  image: {
    height: 200,
    width: 200,
  },
  productTitle: {
    fontFamily: 'SegoeUI',
    fontSize: 20,
    marginBottom: 10,
  },
  desc: {
    fontFamily: 'SegoeItalic',
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontFamily: "Segoe",
    fontSize: 18,

  },
  addCartButton: {
    width: 250,
    height: 60,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

  },
  addCartText: {
    color:'#FF9B07',
    fontFamily: "Segoe",
    fontSize: 23,

  }

})

export default SpecialProductsDetails;