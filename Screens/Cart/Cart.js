import React, { useEffect, useState, useContext } from "react";

import CartStyle from "./CartStyle";
import { View, Text, FlatList, Pressable, SafeAreaView, Image, Modal, ActivityIndicator } from 'react-native';
import BackButton from "../../Components/BackButton/BackButton";

import { CartContext } from "../../Components/Cart/CartContext";

import FontsPage from "../../Components/FontsPage/FontsPage";

//to use webview with paypal payment gateway
import { WebView } from 'react-native-webview';

import CloseButton from "@expo/vector-icons/Ionicons"

export default function Cart({ navigation }) {
    const goBack = () => {
        navigation.navigate('Dash')
    }


    <FontsPage />

    const { items, getItemsCount, getTotalPrice } = useContext(CartContext);

    //for the payment gateway
    const [showGateway, setShowGateway] = useState(false);

    //to set the state for the webview
    const [prog, setProg] = useState(false);
    const [progClr, setProgClr] = useState('#000');

    function onMessage(e) {
        let data = e.nativeEvent.data;
        setShowGateway(false);
        console.log(data);
        let payment = JSON.parse(data);
        if (payment.status === 'COMPLETED') {
            alert('PAYMENT MADE SUCCESSFULLY!');
        } else {
            alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
        }
    }

    function Totals() {
        let [total, setTotal] = useState(0);

        useEffect(() => {
            setTotal(getTotalPrice());
        });

        return (
            <View>
                <Text style={CartStyle.productName2}>Total</Text>
                <Text style={CartStyle.totalPrice}>${total}</Text>
            </View>
        );
    }

    function renderItem({ item }) {
        return (
            <View style={{ borderWidth: 2, borderRadius: 5, borderColor: '#FF9B07', marginBottom: 20, }}>

                <View style={{ height: 100, width: 300, marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: item.product.image }} style={CartStyle.image} />

                </View>

                <View style={{ marginHorizontal: 10, }}>
                    <Text style={CartStyle.productName}>Product Name: {item.product.title} </Text>
                    <Text style={CartStyle.quantity}>Quantity:  {item.qty}</Text>
                    <Text style={CartStyle.price}>Price: ${item.totalPrice}</Text>
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={CartStyle.mainContainer}>
            <View style={CartStyle.headerContainer}>
                <View>
                    <BackButton data={goBack} />
                </View>

                <View>
                    <Text style={CartStyle.title}>My Cart</Text>
                </View>
            </View>

            <Text style={CartStyle.productTitle}>My Items</Text>

            <View style={{ height: '85%' }} >


                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.product.id.toString()}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={Totals}
                    style={CartStyle.items}
                />

                <View style={{ marginVertical: 10, width: 350, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={goBack} >
                        <Text style={{ fontFamily: 'Segoe', fontSize: 20, }}>Want to continue Shopping?</Text>
                    </Pressable>
                </View>

                <View style={{ width: 350, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={CartStyle.button} onPress={() => setShowGateway(true)}>
                        <Text style={CartStyle.buttonText}>CheckOut</Text>
                    </Pressable>
                </View>
            </View>

            {showGateway ? (
                <Modal
                    visible={showGateway}
                    onDismiss={() => setShowGateway(false)}
                    onRequestClose={() => setShowGateway(false)}
                    animationType={"fade"}
                    transparent
                >
                    <View style={CartStyle.webViewCon}>
                        <View style={CartStyle.webViewHead}>
                            <Pressable onPress={() => setShowGateway(false)}>
                                <CloseButton name="close" size={30} color="black" />
                            </Pressable>

                            <Text style={{fontFamily:'SegoeItalic', fontSize: 20,}}>PayPal Gateway</Text>

                            <View>
                                <ActivityIndicator size={24} color="#FF9B07" />
                            </View>
                        </View>

                        <WebView
                            source={{ uri: 'https://doctorconsult-53447.web.app/' }}
                            style={{ flex: 1, }}
                            onMessage={onMessage}
                            onLoadStart={() => {
                                setProg(true);
                                setProgClr('#000');
                            }}
                            onLoadProgress={() => {
                                setProg(true);
                                setProgClr('#00457C');
                            }}
                            onLoadEnd={() => {
                                setProg(false);
                            }}
                            onLoad={() => {
                                setProg(false);
                            }}
                        />

                    </View>

                </Modal>
            ) : null}


        </SafeAreaView>
    )
}