import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem';

import '../styles/Cart.scss';

function Cart(props){

    const [active, setActive] = useState(true);
    const price = useRef(0);

    useEffect(()=>{
       setActive(props.active);
       if(!active){
           price.current = 0;
       }
    }, [props.active]);


    function renderCart(){
        price.current = 0;
        return props.cart 
        ? props.cart.map((item, index) =>{
            price.current += (item.price * item.quanity);
            return(
                <div className='cart-item' key={index}>
                   <CartItem item={item} pos={index}/>
                </div>
            )
        })
        : <p>Your cart is empty</p>
    }

    return(
        <div className={`cart ${active ? 'active' : 'not-active'}`} style={ {animation: `${active ? "slideInCart" : "slideOutCart"} 0.5s forwards`} }>
            <div className='cart-container' style={{top: 0}}>
                {renderCart()}
                <div className='price'>
                    <p>Total: {price.current}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {cart: state.cart}
}

export default connect(mapStateToProps)(Cart)
