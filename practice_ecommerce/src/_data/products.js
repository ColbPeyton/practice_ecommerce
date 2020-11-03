import importImages from '../_helpers/importImages';


const images = importImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));


const productData = [
    {
        name: 'Test 1',
        price: 5.00,
        image: images[0],
        id: '0'
    },
    {
        name: 'Test 2',
        price: 2.00,
        image: images[0],
        id: '1'
    },
    {
        name: 'Test 3',
        price: 5.00,
        image: images[0],
        id: '2'
    },
]

export default productData;