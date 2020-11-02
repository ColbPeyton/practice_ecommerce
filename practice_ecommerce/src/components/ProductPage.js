import React from 'react';
import { connect, useSelector} from 'react-redux'
import { addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart } from '../redux/actions/actions'


function ProductPage(props){
    return(
        <div className='productPage'>
            <h1>{props.name}</h1>
            <button onClick={()=> { props.addItemToCart(props.name, 1 , 1);}}>add</button>
            <button onClick={()=> { props.addItemToCart('second', 1 , 2);}}>add</button>
            <button onClick={()=> { props.addItemToCartQuanity(props.name, 1, 1);}}>add quanity</button>
            <button onClick={()=> { props.removeItemFromCart(props.name, 1);}}>remove</button>
            <button onClick={()=> { props.removeItemFromCart('second', 2);}}>remove</button>
            <button onClick={()=> { props.removeItemQuanityFromCart(props.name, 1 , 1);}}>remove quanity</button>
        </div>

        
    )
}
const mapStateToProps = state => {
    return { cart: state.cart };
  };

export default connect(
    mapStateToProps,
    { 
        addItemToCart,
        addItemToCartQuanity,
        removeItemFromCart,
        removeItemQuanityFromCart,
     }
  )(ProductPage)
