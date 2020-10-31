const initialState = {
    cart: []
  };

export const addItemToCart = (oldCart = initialState.cart, action) =>{
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
            return [...oldCart, action.payload]
        }
    }
    return oldCart;
}

export const addItemToCartQuanity = (oldCart = initialState.cart, action) =>{
    if(action.type === 'ADD_ITEM_TO_CART_QUANITY'){
        return oldCart.forEach((item, index) => {
            if(item.id === action.payload.id){
                oldCart[index].quanity += 1;
                return [...oldCart];
            }
        })
    };
    return oldCart;
}

export const removeItemFromCart = (oldCart = initialState.cart, action) =>{
    if(action.type === 'REMOVE_ITEM_FROM_CART'){
        return [oldCart.filter(item => item.id !== action.payload.id)];
    };
    return oldCart;
}

export const removeItemQuanityFromCart = (oldCart = initialState.cart, action) =>{
    if(action.type === 'REMOVE_ITEM_QUANITY_FROM_CART'){
        return oldCart.forEach((item, index) => {
            if(item.id === action.payload.id){
                if(item.quanity > 1){
                    let arr;
                    oldCart[index].quanity -= 1;
                    return Object.assign({}, oldCart, {
                        cart: [...arr]
                    }) 
                    
                }else{
                    return Object.assign({}, oldCart, {
                        cart: oldCart.slice(index, 1)
                    }) 
                }
            }
        })
    };
    return oldCart;
}

