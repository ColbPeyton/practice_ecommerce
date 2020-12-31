import importImages from '../_helpers/importImages';


const prints = importImages(require.context('../assets/images/Prints', false, /\.(png|jpe?g|svg)$/));
const stickers = importImages(require.context('../assets/images/Stickers', false, /\.(png|jpe?g|svg)$/));
const promo = importImages(require.context('../assets/images/Promo', false, /\.(png|jpe?g|svg)$/));
const bundles = importImages(require.context('../assets/images/Bundles', false, /\.(png|jpe?g|svg)$/));


export const printData = [
    {
        name: 'Holiday Cheer Printable Poster',
        price: 6.00,
        img: [prints[0], prints[1]],
        id: 10001,
        desc: 'Spread some holiday cheer with this BTS-inspired printable poster! If you love the holidays and BTS, this is the perfect way to celebrate the season!',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo: promo[0],
        tags:['BTS', 'eco-friendly', 'print']
    },
    {
        name: 'Dynamite Printable Poster',
        price: 6.00,
        img: [prints[2], prints[3]],
        id: 10002,
        desc: 'Ithink you\'re dynamite! Remember to shine your unique light every day with this BTS-inspired printable poster.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo: promo[1],
        tags:['BTS', 'eco-friendly', 'print']
    },
    {
        name: 'Set The Night Alight Printable Artwork',
        price: 6.00,
        img: [prints[8],prints[9]],
        id: 10003,
        desc: 'Whether you\'re having friends over or having a dance party with yourself, set the night alight! Inspired by the BTS song "Dynamite," this makes a great gift or home decor for BTS fans.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[4],
        tags:['BTS', 'eco-friendly', 'print']
    },
    {
        name: 'Griffindog Printable Poster',
        price: 6.00,
        img: [prints[4], prints[5]],
        id: 10004,
        desc: 'Accio artwork! Are you the proud parent of a Griffindog, or a proud Griffindor yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo: promo[2],
        tags:['harry potter', 'eco-friendly', 'print']
    },
    {
        name: 'Hufflepup Printable Poster',
        price: 6.00,
        img: [prints[6],prints[7]],
        id: 10005,
        desc: 'Accio artwork! Are you the proud parent of a Hufflepup, or a proud Hufflepuff yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[3],
        tags:['harry potter', 'eco-friendly', 'print']
    },
    {
        name: 'Ravenpaw Printable Artwork',
        price: 6.00,
        img: [prints[10],prints[11]],
        id: 10006,
        desc: 'Accio artwork! Are you the proud parent of a Ravenpaw, or a proud Ravenclaw yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[5],
        tags:['harry potter', 'eco-friendly', 'print']
    },
    {
        name: 'Snifferin Printable Artwork',
        price: 6.00,
        img: [prints[12],prints[13]],
        id: 10007,
        desc: 'Accio artwork! Are you the proud parent of a Snifferin, or a proud Slytherin yourself? Show some school spirit with this adorable Harry Potter-inspired illustration! This high-resolution artwork can be printed at home or at your local print shop in 4 sizes: 5x7, 8x10, 11x14, and 16x20. Artwork is available for download after purchase.',
        details:[
            'Please note that this listing is for a digital download. If you would prefer to have a physical print shipped to you-hang tight! Physical prints and stickers will be available soon'
        ],
        promo:promo[6],
        tags:['harry potter', 'eco-friendly', 'print']
    },

 
]
export const stickerData = [
    
    {
        name: 'Rock and Rollerskate Glossy Sticker',
        price: 1.99,
        img: [stickers[7], stickers[8], stickers[9]],
        id: 20001,
        desc:'Rock and roll with this cute rollerskater sticker! This sticker makes a unique addition to laptops, journals, and more!',
        details:[
                'Dimensions: 2" x 2" glossy white round sticker.', 
                'This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[12],
        tags:['sticker']
    },
    {
        name: 'Spicy Lil\' Kimchi Glossy Sticker',
        price: 1.99,
        img: [stickers[0], stickers[1], stickers[2], stickers[3]],
        id: 20002,
        desc:'Are you a little on the spicy side? Show it off with this sassy kimchi sticker. Perfect for journals, notebooks, laptops, and more!',
        details:[
                'Dimensions: 2" x 2"', 
                'Available in 3 colors: blue, yellow, and pink', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[10],
        tags:['sticker']
    },
    {
        name: 'Snug as a Pug Glossy Sticker',
        price: 2.00,
        img: [stickers[4], stickers[5]],
        id: 20003,
        desc:'Cold weather means more blanket snuggles! Be like this happy pug and stay warm this winter! This sticker is perfect for decorating laptops, planners/bullet journals, and more!',
        details:[
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[11],
        tags:['sticker']
    },
    {
        name: 'Make Life Sweeter',
        price: 2.00,
        img: [stickers[10], stickers[11]],
        id: 20005,
        desc:'Make your life a little sweeter with this adorable sticker! Remind yourself to stay positive by placing this on your laptop or journal.',
        details:[
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[14],
        tags:['sticker']
    },

]

export const bundleData = [
    {
        name: 'Biden Sticker Pack',
        price: 5.50,
        img: [bundles[0], bundles[1], bundles[2], bundles[3], bundles[4]],
        id: 30046,
        desc:'An election 2020 sticker set supporting Joe Biden. Buy the pack or just one sticker. Show your support by placing these stickers on your laptop, notebook, and more!',
        details:[
                'Sticker Pack Contains: Shades, Go Joe Go, Blue Wave, and No Malarkey',
                'Dimensions: 2" x 2"', 
                'Printed on glossy white sticker paper. This sticker is NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[7],
        tags:['political', 'bundle', 'sticker' ]
    },
    {
        name: 'Plant Lover Stickers | Eco-Friendly Sticker Set',
        price: 2.00,
        img: [bundles[5], bundles[6], bundles[7], bundles[8]],
        id: 30001,
        desc:'Are you a proud plant parent? If you\'ve decorated your house with plants, why not your notebook, planner, or laptop?',
        details:[
                'Dimensions: Potted Plant: 3" x 3" | Bloom: 3.75" x 2"', 
                'Printed on recycled kraft paper. These stickers are NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[8],
        tags:['political', 'bundle', 'sticker', 'eco-friendly' ]
    },
    {
        name: 'Home Office Sticker Set',
        price: 5.50,
        img: [bundles[9], bundles[10], bundles[11], bundles[12], bundles[13]],
        id: 30002,
        desc:'Are you a proud plant parent? If you\'ve decorated your house with plants, why not your notebook, planner, or laptop?',
        details:[
                'Dimensions: Potted Plant: 3" x 3" | Bloom: 3.75" x 2"', 
                'Printed on recycled kraft paper. These stickers are NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[9],
        tags:['political', 'bundle', 'sticker' ]
    },
    {
        name: 'Self-Care Sticker Set',
        price: 5.50,
        img: [bundles[14], bundles[15], bundles[16], bundles[17], bundles[18]],
        id: 30003,
        desc:'Are you a proud plant parent? If you\'ve decorated your house with plants, why not your notebook, planner, or laptop?',
        details:[
                'Dimensions: Potted Plant: 3" x 3" | Bloom: 3.75" x 2"', 
                'Printed on recycled kraft paper. These stickers are NOT waterproof.',
                'Colors may vary from screen to screen.'
            ],
        promo:promo[13],
        tags:['political', 'bundle', 'sticker' ]
    },
]


export const completeData = [
   ...printData,
   ...bundleData,
   ...stickerData
]





// Eco Sticker Set:
// This sticker pack is perfect for people who love stickers and the environment! Great for use on notebooks, journals, laptops, and more.

// DETAILS:
// This sticker bundle contains: 2.5"x2.5" stickers (3) and 1"x1" stickers (2)
// Printed on recycled kraft sticker paper. These stickers are NOT waterproof.
// Colors may vary from screen to screen.

// Homegrown: Whether you're a plant or a person, we're all homegrown on mother Earth. Also available as part of the Eco-Friendly Sticker Bundle

// Soul & Soil: Be good to yourself and the planet. This sticker is perfect for bullet journals, notebooks, planners, laptops, and maybe even your planters! Also available as part of the Eco-Friendly Sticker Bundle

// Fishy Friends: Save our beautiful oceans and protect our fishy friends. Also available as part of the Eco-Friendly Sticker Bundle