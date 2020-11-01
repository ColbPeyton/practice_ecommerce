import { ADD_ITEM, ADD_QUANITY, REMOVE_ITEM, REMOVE_QUANITY} from "./actionTypes";


export const addItemToCart = (name, quanity, id) =>{
    return{
        type: ADD_ITEM,
        payload:{
            name,
            quanity,
            id
        }
    };
};
export const addItemToCartQuanity = (name, id) =>{
    return{
        type: ADD_QUANITY,
        payload:{
            name,
            id
        }
    };
};

export const removeItemFromCart = (name, id) =>{
    return{
        type: REMOVE_ITEM,
        payload:{
            name,
            id
        }
    };
}

export const removeItemQuanityFromCart = (name, quanity, id) =>{
    return{
        type: REMOVE_QUANITY,
        payload:{
            name,
            quanity,
            id,
        }
    };
}
