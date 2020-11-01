import { ADD_ITEM, ADD_QUANITY, REMOVE_ITEM, REMOVE_QUANITY} from '../actions/actionTypes';



const INITIAL_STATE = {
    cart: []
  };

export const addItemToCart = (state = INITIAL_STATE, action) =>{
    if(action.type === ADD_ITEM){
        // Check cart for existing items. If exists add to quanity
        let itemIndex = -1;
        state.cart.forEach((item, index) => {
            if(item.id === action.payload.id){
                itemIndex = index;
            }
        });
        if(itemIndex !== -1){
            let temp = [...state.cart];
            temp[itemIndex].quanity += 1;
            return {...state, cart: temp};
        }
        return {...state, cart:[...state.cart, action.payload]};
    }
    return state;
}

export const addItemToCartQuanity = (state = INITIAL_STATE.cart, action) =>{
    if(action.type === ADD_QUANITY){
        return state.forEach((item, itemIndex) => {
            if(item.id === action.payload.id){
                let temp = [...state.cart];
                temp[itemIndex].quanity += 1;
                return {...state, cart: temp};
            };
        });
    };
    return state;
}

export const removeItemFromCart = (state = INITIAL_STATE.cart, action) =>{
    if(action.type === REMOVE_ITEM){
        return [state.filter(item => item.id !== action.payload.id)];
    };
    return state;
}

export const removeItemQuanityFromCart = (state = INITIAL_STATE.cart, action) =>{
    if(action.type === REMOVE_QUANITY){
        return state.forEach((item, index) => {
            if(item.id === action.payload.id){
                if(item.quanity > 1){
                    let arr;
                    state[index].quanity -= 1;
                    return Object.assign({}, state, {
                        cart: [...arr]
                    }) 
                    
                }else{
                    return Object.assign({}, state, {
                        cart: state.slice(index, 1)
                    }) 
                }
            }
        })
    };
    return state;
}

