import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart } from '../redux/actions/actions'


import add from '../assets/icons/add.svg';
import minus from '../assets/icons/minus.svg';
import remove from '../assets/icons/remove.svg';

import '../styles/CartItem.scss';

function CartItem(props){

    const[quanity, setQuanity] = useState(props.item.quanity);

    useEffect(()=>{
        setQuanity(props.item.quanity);
    },[props.cart, props.item.quanity])

    return(
        <div className={`cart-item ${props.pos % 2 === 0 ? 'even':''}`}>
            <div className='container'>
                <div className='item-img'>
                    <img src={props.item.img[0].default} alt={props.item.name} />
                </div>
                <div className='item-name'>
                    <h3>{props.item.name}</h3>
                </div>

                <div className='item-quanity'>
                    <button onClick={()=> props.addItemToCartQuanity(props.item.name, 1, props.item.id)}>
                        <img src={add} alt='add' />
                    </button>
                    <p>{quanity}</p>
                    <button onClick={()=> props.removeItemQuanityFromCart(props.item.name, 1, props.item.id)}>
                    <img src={minus} alt='minus' />
                    </button>
                </div>
                <div className='item-remove'>
                    <button onClick={()=> props.removeItemFromCart(props.item.name, props.item.id)}>
                    <img src={remove} alt='remove' />
                    </button>
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
