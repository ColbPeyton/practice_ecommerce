import importImages from '../_helpers/importImages';


const images = importImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));


const productData = [
    {
        name: 'Test 1',
        price: 5.00,
        img: [images[0],images[1],images[0],],
        id: 23145
    },
    {
        name: 'Test 2',
        price: 2.00,
        img: [images[1]],
        id: 12234
    },
    {
        name: 'Test 3',
        price: 5.00,
        img: [images[0]],
        id: 54672
    },
    {
        name: 'Test 4',
        price: 2.00,
        img: [images[1]],
        id: 45875
    },
    {
        name: 'Test 5',
        price: 5.00,
        img: [images[0]],
        id: 54672
    },
    {
        name: 'Test 6',
        price: 2.00,
        img: [images[1]],
        id: 54785
    },
    {
        name: 'Test 7',
        price: 5.00,
        img: [images[0]],
        id: 69854
    },
    {
        name: 'Test 8',
        price: 2.00,
        img: [images[1]],
        id: 25463
    },
    {
        name: 'Test 9',
        price: 5.00,
        img: [images[0]],
        id: 34852
    },
    {
        name: 'Test 10',
        price: 2.00,
        img: [images[1]],
        id: 15789
    },
]


export default productData;