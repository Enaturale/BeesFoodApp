import {StyleSheet} from 'react-native'

const categoriesStyle = StyleSheet.create({
    container:{
        marginVertical: 20,

    },
    view:{
        marginLeft: -115,
       
    },
    pressable:{
        height: 100,
        width: 100,
        borderColor:'black',
        borderWidth: 1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 15,
        marginVertical: 10,
        backgroundColor:'black'
       
    },
    title:{
        fontSize: 20,
        fontFamily:'Segoe',
        
    },

})

export default categoriesStyle;