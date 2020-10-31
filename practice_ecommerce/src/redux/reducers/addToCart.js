export const addItemToCart = (oldCart = [], action) =>{
    if(action.type === 'ADD_ITEM_TO_CART'){
        return[...oldCart, action.payload]
    };

    return oldCart;
}

export const addItemToCartQuanity = (oldCart = [], action) =>{
    let returnArr = oldCart;
    if(action.type === 'ADD_ITEM_TO_CART_QUANITY'){
        return oldCart.map((item) => {
            if(item.id === action.payload.id){
                item.quanity += 1;
            }
        })
    };
    return returnArr;
}

