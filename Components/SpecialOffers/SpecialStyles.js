import { StyleSheet } from "react-native";

const SpecialStyles = StyleSheet.create({
    mainTitle:{
        fontFamily:'Segoe',
        fontSize: 20,
    },
    container:{
        marginLeft: -75,
        marginTop: 10,
        
    },
    pressable:{
       
        justifyContent:"center",
        // alignItems:'center',
        backgroundColor: 'black',
        height: 150,
        width: 150,
        borderRadius: 10,
    },
    title:{
        color:'#FF9B07',
        fontSize: 15,
    }

})

export default SpecialStyles;