import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import CartItem from './CartItem';

import '../styles/Cart.scss';

function Cart(props){

    const [active, setActive] = useState(true);

    useEffect(()=>{
       setActive(props.active);
    }, [props.active]);


    function renderCart(){
        return props.cart 
        ? props.cart.map((item, index) =>{
            console.log(item)
            return(
                <div className='cart-item' key={index}>
                   <CartItem item={item}/>
                </div>
            )
        })
        : <p>Your cart is empty</p>
    }

    return(
        <div className={`cart ${active ? 'active' : ''}`} style={ {animation: `${active ? "slideIn" : "slideOut"} 0.5s forwards`} }>
            <div className='cart-container'>
                {renderCart()}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {cart: state.cart}
}

export default connect(mapStateToProps)(Cart)
