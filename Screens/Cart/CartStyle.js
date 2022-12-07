import { StyleSheet } from "react-native";

const CartStyle = StyleSheet.create({
    mainContainer:{
        marginTop: 70,
        marginHorizontal: 20,
    },
    headerContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        width: 250,
    },
    title:{
        fontSize:30,
        fontFamily:'Segoe'
    },
    listContainer:{

    },
    items:{        
        marginTop: 10,
    },
    productTitle:{
        fontSize:23,
        fontFamily:'Segoe',
        marginBottom: 10,
        marginTop:10,
    }, 
    image:{
        height: 100,
        width: 100,
    },
    productName:{
        fontSize: 20,
        fontFamily:'Segoe',
        marginBottom: 10,

    },
    productName2:{
        fontSize: 20,
        fontFamily:'Segoe',
       marginTop: 20,

    },
    price:{
        fontSize: 15,
        marginBottom: 20,
        // fontFamily:'Segoe',

    }, 
    totalPrice:{
        fontSize: 18,
        marginBottom: 20,

    },
    button:{
        backgroundColor:'black',
        width: 280,
        height: 60,
        justifyContent:'center',
        alignItems:'center',
        borderBottomEndRadius:20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius:20,

    },
    buttonText:{
        fontSize: 20,
        color: '#FF9B07',
        fontFamily:"Segoe",
    },
    quantity:{
        // fontFamily:'Segoe',
        fontSize: 15,
        marginBottom: 5,
    },
    webViewCon:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    webViewHead:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        zIndex: 25,
        elevation: 2,
        justifyContent:'space-between',
        height: 60,
        // marginBottom: 20,
    }


})

export default CartStyle;