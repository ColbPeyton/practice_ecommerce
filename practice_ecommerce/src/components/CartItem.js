import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart } from '../redux/actions/actions'

import '../styles/CartItem.scss';

function CartItem(props){

    const[quanity, setQuanity] = useState(props.item.quanity);

    useEffect(()=>{
        setQuanity(props.item.quanity);
    },[props.cart])

    return(
        <div className='cart-item'>
            <div className='container'>
                <div className='item-img'>
                    {/* <img src={props.item.img} alt={props.item.alt} /> */}
                    <h3>{props.item.name}</h3>
                </div>
                <div className='item-quanity'>
                    <button onClick={()=> props.addItemToCartQuanity(props.item.name, 1, props.item.id)}>+</button>
                    <p>{quanity}</p>
                    <button onClick={()=> props.removeItemQuanityFromCart(props.item.name, 1, props.item.id)}>-</button>
                </div>
                <div className='item-remove'>
                    <button onClick={()=> props.removeItemFromCart(props.item.name, props.item.id)}>X</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {cart: state.cart}
}

export default connect(
    mapStateToProps,
    { 
        addItemToCartQuanity,
        removeItemFromCart, 
        removeItemQuanityFromCart 
    }
  )(CartItem)
