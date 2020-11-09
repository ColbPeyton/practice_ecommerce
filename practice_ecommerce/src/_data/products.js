import importImages from '../_helpers/importImages';


const prints = importImages(require.context('../assets/images/Prints', false, /\.(png|jpe?g|svg)$/));
const stickers = importImages(require.context('../assets/images/Stickers', false, /\.(png|jpe?g|svg)$/));
const promo = importImages(require.context('../assets/images/Promo', false, /\.(png|jpe?g|svg)$/));


export const printData = [
    {
        name: 'Griffindog Printable Poster',
        price: 6.00,
        img: [prints[0], prints[1]],
        id: 10001,
        desc: 'Accio artwork! Are you the proud parent of a Griffindog, or a proud Griffindor yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo: promo[0]
    },
    {
        name: 'Hufflepup Printable Poster',
        price: 6.00,
        img: [prints[2],prints[3]],
        id: 10002,
        desc: 'Accio artwork! Are you the proud parent of a Hufflepup, or a proud Hufflepuff yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[1]
    },
    {
        name: 'Ravenpaw Printable Artwork',
        price: 6.00,
        img: [prints[4],prints[5]],
        id: 10003,
        desc: 'Accio artwork! Are you the proud parent of a Ravenpaw, or a proud Ravenclaw yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[2]
    },
    {
        name: 'Snifferin Printable Artwork',
        price: 6.00,
        img: [prints[6],prints[7]],
        id: 10004,
        desc: 'Accio artwork! Are you the proud parent of a Snifferin, or a proud Slytherin yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[3]
    },
 
]
export const stickerData = [
    {
        name: 'Biden Sticker Pack',
        price: 5.50,
        img: [stickers[0], stickers[1], stickers[2], stickers[3], stickers[4]],
        id: 20046,
        desc:'An election 2020 sticker set supporting Joe Biden. Buy the pack or just one sticker. Show your support by placing these stickers on your laptop, notebook, and more!',
        details:[
                'Sticker Pack Contains: Shades, Go Joe Go, Blue Wave, and No Malarkey',
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
            promo:promo[4]
    },
    {
        name: 'Rock and Rollerskate Glossy Sticker',
        price: 1.99,
        img: [stickers[5], stickers[6]],
        id: 20001,
        desc:'Rock and roll with this cute rollerskater sticker! This sticker makes a unique addition to laptops, journals, and more!',
        details:[
                'Dimensions: 2" x 2" glossy white round sticker.', 
                'This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[11]
    },
    {
        name: 'Spicy Lil\' Kimchi Glossy Sticker',
        price: 1.99,
        img: [stickers[7], stickers[8], stickers[9]],
        id: 20002,
        desc:'Are you a little on the spicy side? Show it off with this sassy kimchi sticker. Perfect for journals, notebooks, laptops, and more!',
        details:[
                'Dimensions: 2" x 2"', 
                'Available in 3 colors: blue, yellow, and pink', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
            promo:promo[8]
    },
    {
        name: 'Snug as a Pug Glossy Sticker',
        price: 2.00,
        img: [stickers[10]],
        id: 20003,
        desc:'Cold weather means more blanket snuggles! Be like this happy pug and stay warm this winter! This sticker is perfect for decorating laptops, planners/bullet journals, and more!',
        details:[
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[8]
    },
    {
        name: 'Plant Lover Stickers | Eco-Friendly Sticker Set',
        price: 2.00,
        img: [stickers[11], stickers[12], stickers[13]],
        id: 20004,
        desc:'Are you a proud plant parent? If you\'ve decorated your house with plants, why not your notebook, planner, or laptop?',
        details:[
                'Dimensions: Potted Plant: 3" x 3" | Bloom: 3.75" x 2"', 
                'Printed on recycled kraft paper. These stickers are NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
            promo:promo[5]
    },
    {
        name: 'Make Life Sweeter',
        price: 2.00,
        img: [stickers[14], stickers[15]],
        id: 20005,
        desc:'Make your life a little sweeter with this adorable sticker! Remind yourself to stay positive by placing this on your laptop or journal.',
        details:[
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[13]
    },

]


export const completeData = [
    {
        name: 'Griffindog Printable Poster',
        price: 6.00,
        img: [prints[0], prints[1]],
        id: 10001,
        desc: 'Accio artwork! Are you the proud parent of a Griffindog, or a proud Griffindor yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo: promo[0]
    },
    {
        name: 'Hufflepup Printable Poster',
        price: 6.00,
        img: [prints[2],prints[3]],
        id: 10002,
        desc: 'Accio artwork! Are you the proud parent of a Hufflepup, or a proud Hufflepuff yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[1]
    },
    {
        name: 'Ravenpaw Printable Artwork',
        price: 6.00,
        img: [prints[4],prints[5]],
        id: 10003,
        desc: 'Accio artwork! Are you the proud parent of a Ravenpaw, or a proud Ravenclaw yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[2]
    },
    {
        name: 'Snifferin Printable Artwork',
        price: 6.00,
        img: [prints[6],prints[7]],
        id: 10004,
        desc: 'Accio artwork! Are you the proud parent of a Snifferin, or a proud Slytherin yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[3]
    },
    {
        name: 'Biden Sticker Pack',
        price: 5.50,
        img: [stickers[0], stickers[1], stickers[2], stickers[3], stickers[4]],
        id: 20046,
        desc:'An election 2020 sticker set supporting Joe Biden. Buy the pack or just one sticker. Show your support by placing these stickers on your laptop, notebook, and more!',
        details:[
                'Sticker Pack Contains: Shades, Go Joe Go, Blue Wave, and No Malarkey',
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
            promo:promo[4]
    },
    {
        name: 'Rock and Rollerskate Glossy Sticker',
        price: 1.99,
        img: [stickers[5], stickers[6]],
        id: 20001,
        desc:'Rock and roll with this cute rollerskater sticker! This sticker makes a unique addition to laptops, journals, and more!',
        details:[
                'Dimensions: 2" x 2" glossy white round sticker.', 
                'This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[11]
    },
    {
        name: 'Spicy Lil\' Kimchi Glossy Sticker',
        price: 1.99,
        img: [stickers[7], stickers[8], stickers[9]],
        id: 20002,
        desc:'Are you a little on the spicy side? Show it off with this sassy kimchi sticker. Perfect for journals, notebooks, laptops, and more!',
        details:[
                'Dimensions: 2" x 2"', 
                'Available in 3 colors: blue, yellow, and pink', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
            promo:promo[9]
    },
    {
        name: 'Snug as a Pug Glossy Sticker',
        price: 2.00,
        img: [stickers[10]],
        id: 20003,
        desc:'Cold weather means more blanket snuggles! Be like this happy pug and stay warm this winter! This sticker is perfect for decorating laptops, planners/bullet journals, and more!',
        details:[
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[10]
    },
    {
        name: 'Plant Lover Stickers | Eco-Friendly Sticker Set',
        price: 2.00,
        img: [stickers[11], stickers[13], stickers[14]],
        id: 20004,
        desc:'Are you a proud plant parent? If you\'ve decorated your house with plants, why not your notebook, planner, or laptop?',
        details:[
                'Dimensions: Potted Plant: 3" x 3" | Bloom: 3.75" x 2"', 
                'Printed on recycled kraft paper. These stickers are NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
            promo:promo[5]
    },
    {
        name: 'Make Life Sweeter',
        price: 2.00,
        img: [stickers[14], stickers[15]],
        id: 20005,
        desc:'Make your life a little sweeter with this adorable sticker! Remind yourself to stay positive by placing this on your laptop or journal.',
        details:[
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[13]
    },

]

