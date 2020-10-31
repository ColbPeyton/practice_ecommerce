import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";


export const addItemToCart = (name, amount, id) =>{
    return{
        type: 'ADD_ITEM_TO_CART',
        payload:{
            name,
            amount,
            id
        }
    };
};
export const addItemToCartQuanity = (name, amount, id) =>{
    return{
        type: 'ADD_ITEM_TO_CART_QUANITY',
        payload:{
            name,
            amount,
            id
        }
    };
};

export const removeItemFromCart = (name, amount, id) =>{
    return{
        type: 'REMOVE_ITEM_FROM_CART',
        payload:{
            name,
            amount,
            id
        }
    };
}

export const removeItemQuanityFromCart = (name, amount, id) =>{
    return{
        type: 'REMOVE_ITEM_QUANITY_FROM_CART',
        payload:{
            name,
            amount,
            id
        }
    };
}
