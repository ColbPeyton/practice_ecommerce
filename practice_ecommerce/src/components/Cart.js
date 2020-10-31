import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getCart} from "../redux/selectors";

import {addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart} from '../redux/actions/actions'

import '../styles/Cart.scss';

function Cart(props){

    const [active, setActive] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
       setActive(props.cart)
    }, [props.cart]);

    useEffect(()=>{
        setCart(props.cart);
    }, [])


    function renderCart(){
        console.log(props)
        return cart.map(item =>{
            return(
                <div className='cart-item'>
                    <p>{item.name}</p>
                    <div className='item-buttons'>
                        <button onClick={()=> addItemToCartQuanity(item.name, item.id)}>+</button>
                        <button onClick={()=> removeItemQuanityFromCart(item.name, item.id)}>-</button>
                        <button onClick={()=> removeItemFromCart(item.name, item.id)}>X</button>
                    </div>
                </div>
            )
        })
    }

    // call parent function to disable sidebar when link is clicked
    // function disable(){
    //     setActive(false);
    //     props.disableSidebar();
    // }



    return(
        <div className={`cart ${active ? 'active' : ''}`} style={ {animation: `${active ? "slideIn" : "slideOut"} 0.5s forwards`} }>
            <div className='cart-container' style={{top: 0}}>
                {renderCart()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {cart: state.cart}
}

export default connect(
    (mapStateToProps),
    { 
        addItemToCartQuanity,
        removeItemFromCart, 
        removeItemQuanityFromCart 
    }
  )(Cart)
