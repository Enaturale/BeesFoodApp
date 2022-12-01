import React from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    FlatList,
    Pressable,
    Image,
    SafeAreaView
} from "react-native"
import BackButton from '../../Components/BackButton/BackButton'
import FontsPage from '../../Components/FontsPage/FontsPage'
import Searchbar from '../../Components/Searchbar/Searchbar';

const data = [
    {
        id: '1',
        image: 'https://cdn.pixabay.com/photo/2021/08/21/23/55/pizza-6563825__340.png',
        title: 'Pizza',
        types: '20 types',
    },
    {
        id: '2',
        image: 'https://cdn.pixabay.com/photo/2020/10/22/08/56/donut-5675340__340.png',
        title: 'Snacks',
        types: '20 types',
    },
    {
        id: '3',
        image: 'https://cdn.pixabay.com/photo/2021/05/14/23/35/breakfast-6254633__340.png',
        title: 'Salads',
        types: '20 types',
    },
    {
        id: '4',
        image: 'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424__340.png',
        title: 'Light',
        types: '20 types',
    },
    {
        id: '5',
        image: 'https://cdn.pixabay.com/photo/2012/04/14/14/29/wine-34125__340.png',
        title: 'Drinks',
        types: '20 types',
    }

]

const CategoriesPage = ({ navigation }) => {
    <FontsPage />

    const goBack = () => {
        navigation.navigate('Dash')
    }

    const items = ({ item, index }) => {
        const isEnd = index === data.length - 1;
        return (
            <View>
                <Pressable style={Styles.itemsContainer}>
                    <View style={{ flexDirection: 'row', width: 320, justifyContent: 'space-between' }}>
                        <View>
                            <Image source={{ uri: item.image }} style={Styles.image} />
                        </View>
                        <View style={{ marginRight: 20, }}>
                            <Text style={Styles.text} numberOfLines={2}>{item.title}</Text>
                            <Text style={Styles.secondtext}>{item.types}</Text>
                        </View>

                        <Pressable style={Styles.pressable} >
                            <Text style={Styles.pressableText}>See All</Text>
                        </Pressable>
                    </View>
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

            <View style={{height: '85%'}}>
                <FlatList
                    data={data}
                    renderItem={items}
                    keyExtractor={items => items.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    // ListFooterComponent={() => <Text>End of List</Text>}
                />
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
        justifyContent: 'center',
        borderRadius: 15,

    },
    image: {
        height: 70,
        width: 80,
        marginHorizontal: 20,
    },
    text: {
        color: 'white',
        fontFamily: 'SegoeItalic',
        fontSize: 20,
    },
    secondtext: {
        color: '#FF9B07',
        fontSize: 17,
    },
    pressable: {
        width: 80,
        height: 50,
        borderColor: '#FF9B07',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 15,

    },
    pressableText: {
        color: '#FF9B07',
        fontSize: 15,
        fontFamily: 'Segoe'

    }
})

export default CategoriesPage;