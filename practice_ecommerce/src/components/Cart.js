import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem';

import '../styles/Cart.scss';

function Cart(props){

    const [active, setActive] = useState(true);
    const [price, setPrice] = useState(updateTotal());

    useEffect(()=>{
       setActive(props.active);
    }, [props.active]);

    useEffect(()=>{
        setPrice(updateTotal())
    }, [props.cart])


    function renderCart(){
        return props.cart 
        ? props.cart.map((item, index) =>{
            return(
                <div className='cart-item' key={index}>
                   <CartItem item={item} pos={index}/>
                </div>
            )
        })
        : <p>Your cart is empty</p>
    }

    function updateTotal(){
        let temp = 0;
        for(const item of props.cart){
            temp += (item.price * item.quanity);
        }
        temp = Math.round(temp * 100) / 100
       return temp;
    }

    function chooseAnimation(){
        return props.width >= 1200
        ? {animation: `${active ? "slideInCartLarge" : "slideOutCartLarge"} 0.5s forwards`}
        : {animation: `${active ? "slideInCart" : "slideOutCart"} 0.5s forwards`}
    }

    return(
        <div className={`cart ${active ? 'active' : 'not-active'}`} style={ chooseAnimation() }>
            <div className='cart-container' style={{top: 0}}>
                <div className='price'>
                    <p>Total:</p> <p>$ {price}</p>
                </div>
                {renderCart()}

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {cart: state.cart}
}

export default connect(mapStateToProps)(Cart)
