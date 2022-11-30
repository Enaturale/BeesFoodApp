import React from 'react'
import { 
    ScrollView,
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    Pressable, 
    Image,
     SafeAreaView } from "react-native"
import BackButton from '../../Components/BackButton/BackButton'
import FontsPage from '../../Components/FontsPage/FontsPage'
import Searchbar from '../../Components/Searchbar/Searchbar';

const data = [
    {
        id: '1',
        image: 'https://cdn.pixabay.com/photo/2021/08/21/23/55/pizza-6563825__340.png',
        title: 'Pizza'
    },
    {
        id: '2',
        image: 'https://cdn.pixabay.com/photo/2020/10/22/08/56/donut-5675340__340.png',
        title: 'Snacks',
    },
    {
        id: '3',
        image: 'https://cdn.pixabay.com/photo/2021/05/14/23/35/breakfast-6254633__340.png',
        title: 'Salads',
    },
    {
        id: '4',
        image: 'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424__340.png',
        title: 'Light',
    },
    {
        id: '5',
        image: 'https://cdn.pixabay.com/photo/2012/04/14/14/29/wine-34125__340.png',
        title: 'Drinks',
    }

]

const CategoriesPage = ({ navigation }) => {
    <FontsPage />

    const goBack = () => {
        navigation.navigate('Dash')
    }

    const items = ({ item }) => {
        return (
            <View>
                <Pressable style={Styles.itemsContainer}>
                    <Image source={{uri: item.image}} style={Styles.image} />
                    <Text style={{ color: 'white' }}>{item.title}</Text>
                </Pressable>                
            </View>
        )
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ width: 220, flexDirection: "row", justifyContent: 'space-between' }}>
                <View>
                    <BackButton data={goBack} />
                </View>

                <View style={{ marginTop: 5 }}>
                    <Text style={Styles.title}>Categories</Text>
                </View>
            </View>

            <View>
                <Searchbar />
            </View>

        
                <FlatList
                    data={data}
                    renderItem={items}

                />

                <View style={{marginTop: 400}}>

                </View>


           
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginVertical: 60,
        marginHorizontal: 20,
    },
    title: {
        fontFamily: 'Segoe',
        fontSize: 25,

    },
    itemsContainer: {
        width: 340,
        height: 120,
        backgroundColor: 'black',
        marginTop: 20,
        justifyContent:'center',
        borderRadius: 15,

    },
    image:{
        height: 50,
        width: 50,
    }
})

export default CategoriesPage;