export const addItemToCart = (oldCart = [], action) =>{
    if(action.type === 'ADD_ITEM_TO_CART'){
        // Check cart for existing items. If exists add to quanity
        let itemIndex = -1;
        oldCart.forEach((item, index) => {
            if(item.id === action.payload.id){
                itemIndex = index;
            }
        });
        if(itemIndex !== -1){
            oldCart[itemIndex].quanity += 1;
            return [...oldCart];
        }else{
            return[...oldCart, action.payload];
        }
    }
    return oldCart;
}

export const addItemToCartQuanity = (oldCart = [], action) =>{
    let returnArr = oldCart;
    if(action.type === 'ADD_ITEM_TO_CART_QUANITY'){
        return oldCart.forEach((item) => {
            if(item.id === action.payload.id){
                item.quanity += 1;
            }
        })
    };
    return returnArr;
}

