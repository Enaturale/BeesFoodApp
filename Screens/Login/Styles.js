import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        marginTop: 50,
    },
    title:{
        fontSize: 35,
        fontFamily: "SegoeUI",
        color:"#FF9B07",
        marginTop: 50,
    },
    input:{
        height: 50,
        width: 320,
        marginLeft: 10,
        marginTop: 30,
        borderWidth: 2,
        borderColor:'#FF9B07',
        borderRadius: 10,
    },
    button:{
        width: 300,
        height: 50,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',  
        backgroundColor:'black',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius:20,
        borderTopLeftRadius: 20      
    },
    pressable:{
        width: 90,
        height: 55,
        backgroundColor:'black',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 10,
        marginTop: 35,
        marginBottom: 10,
        borderRadius:20,
        borderColor: 'black',
        borderWidth: 1,
    },
    buttonReg:{
        width: 300,
        height: 50,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',  
        borderWidth:2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius:20,
        borderTopRightRadius: 20  ,
        borderColor: '#FF9B07', 

    }

})

export default styles;