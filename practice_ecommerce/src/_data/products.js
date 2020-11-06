import importImages from '../_helpers/importImages';


const prints = importImages(require.context('../assets/images/Prints', false, /\.(png|jpe?g|svg)$/));
const stickers = importImages(require.context('../assets/images/Stickers', false, /\.(png|jpe?g|svg)$/));


export const printData = [
    {
        name: 'Dogwarts - Griffindog',
        price: 20.00,
        img: [prints[0], prints[1]],
        id: 10001
    },
    {
        name: 'Dogwarts - Hufflepup',
        price: 20.00,
        img: [prints[2],prints[3]],
        id: 10002
    },
    {
        name: 'Dogwarts - Ravenpaw',
        price: 20.00,
        img: [prints[4],prints[5]],
        id: 10003
    },
    {
        name: 'Dogwarts - Snifferin',
        price: 20.00,
        img: [prints[6],prints[7]],
        id: 10004
    },
 
]
export const stickerData = [
    {
        name: 'Skater',
        price: 2.00,
        img: [stickers[0], stickers[1]],
        id: 20001
    },
    {
        name: 'Kimchi',
        price: 2.00,
        img: [stickers[2], stickers[3], stickers[4]],
        id: 20002
    },
    {
        name: 'Pug',
        price: 2.00,
        img: [stickers[5]],
        id: 20003
    },
    {
        name: 'Bloom Where You\'re planted',
        price: 2.00,
        img: [stickers[6]],
        id: 20004
    },
    {
        name: 'Plant',
        price: 2.00,
        img: [stickers[7]],
        id: 20005
    },
    {
        name: 'Make Life Sweeter',
        price: 2.00,
        img: [stickers[8], stickers[9]],
        id: 20006
    },

]


export const completeData = [
    {
        name: 'Dogwarts - Griffindog',
        price: 20.00,
        img: [prints[0], prints[1]],
        id: 10001
    },
    {
        name: 'Dogwarts - Hufflepup',
        price: 20.00,
        img: [prints[2],prints[3]],
        id: 10002
    },
    {
        name: 'Dogwarts - Ravenpaw',
        price: 20.00,
        img: [prints[4],prints[5]],
        id: 10003
    },
    {
        name: 'Dogwarts - Snifferin',
        price: 20.00,
        img: [prints[6],prints[7]],
        id: 10004
    },
    {
        name: 'Skater',
        price: 2.00,
        img: [stickers[0], stickers[1]],
        id: 20001
    },
    {
        name: 'Kimchi',
        price: 2.00,
        img: [stickers[2], stickers[3], stickers[4]],
        id: 20002
    },
    {
        name: 'Pug',
        price: 2.00,
        img: [stickers[5]],
        id: 20003
    },
    {
        name: 'Bloom Where You\'re planted',
        price: 2.00,
        img: [stickers[6]],
        id: 20004
    },
    {
        name: 'Plant',
        price: 2.00,
        img: [stickers[7]],
        id: 20005
    },
    {
        name: 'Make Life Sweeter',
        price: 2.00,
        img: [stickers[8], stickers[9]],
        id: 20006
    },
]

