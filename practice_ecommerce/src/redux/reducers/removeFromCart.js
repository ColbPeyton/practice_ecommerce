export const removeItemFromCart = (oldCart = [], action) =>{
    let returnArr = oldCart;
    if(action.type === 'REMOVE_ITEM_FROM_CART'){
        returnArr = oldCart.filter(item => item.id !== action.payload.id);
    };
    return returnArr;
}

export const removeItemQuanityFromCart = (oldCart = [], action) =>{
    let returnArr = oldCart;
    if(action.type === 'REMOVE_ITEM_QUANITY_FROM_CART'){
        return oldCart.map((item, index) => {
            if(item.id === action.payload.id){
                if(item.quanity > 1){
                    item.quanity -= 1;
                    returnArr = oldCart;
                }else{
                    returnArr = oldCart.slice(index, 1);
                }
            }
        })
    };
    return returnArr;
}