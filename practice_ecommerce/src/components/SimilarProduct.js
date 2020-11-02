import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux'


import img from '../assets/images/placeholderProductImage.jpg';

import '../styles/SimilarProduct.scss';

function SimilarProduct(props){

    const [clicked, setClicked] = useState(false);

    // Check if product is located in cart. Will update button text 
    useEffect(()=>{
        function checkIfInCart(){
            return props.cart.some(item => item.id === props.item.id);
        }
        setClicked(checkIfInCart())
    },[props.cart, props.item.id])


    function renderLayout(){
        return props.position 
        ? 'odd'
        : 'even'
    }

    function renderButton(){
        return clicked
        ? <button onClick={()=> { props.addItemToCart(props.item.name, 1 , props.item.id);}}>Add Another!</button>
        : <button onClick={()=> { props.addItemToCart(props.item.name, 1 , props.item.id);}}>Add To Cart</button>

    }

   


    return(
        <div className={`similar-product ${renderLayout()}`}>
            <div className='similar-product-container'>
                <div className='image'>
                    <img src={img} alt={'placeholder'} />
                </div>
                <div className='info'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   {renderButton()}
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return { cart: state.cart };
  };

export default connect(mapStateToProps)(SimilarProduct);