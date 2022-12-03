const DATA = [
    {
        id: 1,
        image: 'https://cdn.pixabay.com/photo/2021/08/21/23/55/pizza-6563825__340.png',
        title: 'Pepperoni Pizza',
        price: 2000,
        description: 'Extra Sauce, Extra Spiced. Round Medium and Round Big.'
    },
    {
        id: 2,
        image: 'https://cdn.pixabay.com/photo/2020/10/22/08/56/donut-5675340__340.png',
        title: 'Round Doughnut',
        price: 1000,
        description: 'Honey Glazed, Sugar Glazed, and Chocolate Glazed round doughnuts'

    },
    {
        id: 3,
        image: 'https://cdn.pixabay.com/photo/2021/05/14/23/35/breakfast-6254633__340.png',
        title: 'Fruit Salad',
        price: 2000,
        description: 'Five tropical fruits - Pineapple, Watermelon, Apple, Critus, and Cucumber'

    },
    {
        id: 4,
        image: 'https://cdn.pixabay.com/photo/2021/05/23/22/27/sandwich-6277424__340.png',
        title: 'Turkey Sandwich',
        price: 1500,
        description: 'Double sides with roasted or boiled chicken in between Palermorain thin slide bread.'

    },
    {
        id: 5,
        image: 'https://cdn.pixabay.com/photo/2012/04/14/14/29/wine-34125__340.png',
        title: 'Fruit by Bee',
        price: 9000,
        description: 'All fruits juiced together to give a fresh African taste. Be African. Taste Africa.'

    }

];

export function getDataItem(){
    return DATA;
}

export function getData(id) {
    return DATA.find((data) => (data.id == id));
}

export function getTitle(title){
    return DATA.find((datatitle) => (datatitle.title == title));
}