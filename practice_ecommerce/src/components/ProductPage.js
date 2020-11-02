import React from 'react';
import { connect } from 'react-redux'
import { addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart } from '../redux/actions/actions'
import img from '../assets/images/placeholderProductImage.jpg';


import '../styles/ProductPage.scss';

function ProductPage(props){
    return(
        <main className='product-page'>
           <div className='product-container'>
               <div className='product'>
                    <div className='img'>
                        <img src={img} alt={'placeholder'} />
                    </div>
                    <div className='name'>
                        <h2>{props.name}</h2>
                    </div>
                    <div className='desc'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum eleifend purus, 
                        vitae convallis mi ultricies a. Maecenas mollis, mi eget pellentesque consequat, sapien nisi 
                        interdum neque, eget porta erat augue vitae nunc.</p>
                    </div>
               </div>
                <div className='cart-option'>
                    <button onClick={()=> { props.addItemToCart(props.name, 1 , 1);}}>Add To Cart</button>
                </div>
           </div> 
        </main>

        
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




//   <button onClick={()=> { props.addItemToCart(props.name, 1 , 1);}}>add</button>
//   <button onClick={()=> { props.addItemToCart('second', 1 , 2);}}>add</button>
//   <button onClick={()=> { props.addItemToCartQuanity(props.name, 1, 1);}}>add quanity</button>
//   <button onClick={()=> { props.removeItemFromCart(props.name, 1);}}>remove</button>
//   <button onClick={()=> { props.removeItemFromCart('second', 2);}}>remove</button>
//   <button onClick={()=> { props.removeItemQuanityFromCart(props.name, 1 , 1);}}>remove quanity</button>