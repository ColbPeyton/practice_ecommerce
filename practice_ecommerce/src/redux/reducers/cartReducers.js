import { ADD_ITEM, ADD_QUANITY, REMOVE_ITEM, REMOVE_QUANITY} from '../actions/actionTypes';



const INITIAL_STATE = {
    cart: []
  };



export const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ADD_ITEM:
            return addItemToCart(state, action);
        case ADD_QUANITY:
            return addItemToCartQuanity(state, action);
        case REMOVE_ITEM:
            return removeItemFromCart(state, action);
        case REMOVE_QUANITY:
            return removeItemQuanityFromCart(state, action);
        default:
            return state;
    }
}

const addItemToCart = (state = INITIAL_STATE, action) =>{
    if(action.type === ADD_ITEM){
        // Check cart for existing items. If exists add to quanity
        let itemIndex = findLocation(state.cart, 'id', action.payload.id);
        if(itemIndex !== -1){
          return addItemToCartQuanity(state, action, itemIndex)
        }
        return {...state, cart:[...state.cart, action.payload]};
    }
    return state;
}

const addItemToCartQuanity = (state = INITIAL_STATE, action, index = -1) =>{
    // If location of item is already known
    if(index !== -1){
        let temp = [...state.cart];
        temp[index].quanity += action.payload.quanity;
        return {...state, cart: temp};
    }
    let itemIndex = findLocation(state.cart, 'id', action.payload.id);
    if(itemIndex !== -1){
        let temp = [...state.cart];
        temp[itemIndex].quanity += action.payload.quanity;
        return {...state, cart: temp};
    }
    return state;
}

const removeItemFromCart = (state = INITIAL_STATE, action) =>{
    return {...state, cart: [...state.cart.filter(item => item.id !== action.payload.id)]};
}

const removeItemQuanityFromCart = (state = INITIAL_STATE, action) =>{
    let itemIndex = findLocation(state.cart, 'id', action.payload.id);
    if(itemIndex !== -1){
        let temp = [...state.cart];
        temp[itemIndex].quanity -= action.payload.quanity;
        if(temp[itemIndex].quanity <= 0){
            return removeItemFromCart(state, action)
        }
        return {...state, cart: temp};
    }
    return state;
}


function findLocation(arr, val, id){
    let location = -1;
    arr.forEach((el, index)=> {
        if(el[val] === id){
            location = index;
        };
    })

    return location;
}
