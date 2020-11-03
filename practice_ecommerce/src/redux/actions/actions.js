import { ADD_ITEM, ADD_QUANITY, REMOVE_ITEM, REMOVE_QUANITY, CURRENT_ITEM} from "./actionTypes";


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
export const addItemToCartQuanity = (name, quanity, id) =>{
    return{
        type: ADD_QUANITY,
        payload:{
            name,
            quanity,
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


export const currentItem = (name, id, img, price) => {
    return{
        type: CURRENT_ITEM,
        payload:{
            name,
            id,
            img,
            price
        }
    }
}