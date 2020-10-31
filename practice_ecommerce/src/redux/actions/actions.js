import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";


export const addItemToCart = (name, quanity, id) =>{
    return{
        type: 'ADD_ITEM_TO_CART',
        payload:{
            name,
            quanity,
            id
        }
    };
};
export const addItemToCartQuanity = (name, quanity, id) =>{
    return{
        type: 'ADD_ITEM_TO_CART_QUANITY',
        payload:{
            name,
            quanity,
            id
        }
    };
};

export const removeItemFromCart = (name, quanity, id) =>{
    return{
        type: 'REMOVE_ITEM_FROM_CART',
        payload:{
            name,
            quanity,
            id
        }
    };
}

export const removeItemQuanityFromCart = (name, quanity, id) =>{
    return{
        type: 'REMOVE_ITEM_QUANITY_FROM_CART',
        payload:{
            name,
            quanity,
            id
        }
    };
}
