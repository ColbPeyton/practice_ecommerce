import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart} from '../redux/actions/actions'

import '../styles/Cart.scss';

function Cart(props){

    const [active, setActive] = useState(true);


    useEffect(()=>{
       setActive(props.cart)
    }, [props.cart]);


    // call parent function to disable sidebar when link is clicked
    // function disable(){
    //     setActive(false);
    //     props.disableSidebar();
    // }


    return(
        <div className={`cart ${active ? 'active' : ''}`} style={ {animation: `${active ? "slideIn" : "slideOut"} 0.5s forwards`} }>
            <div className='cart-container' style={{top: 0}}>
                {/* <button onClick={disable}>X</button> */}
            </div>
        </div>
    )
}


export default connect(
    null,
    { 
        addItemToCartQuanity,
        removeItemFromCart, 
        removeItemQuanityFromCart 
    }
  )(Cart)
