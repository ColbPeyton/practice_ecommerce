import React from 'react';

import img from '../assets/images/placeholderProductImage.jpg';

import '../styles/SimilarProduct.scss';

function SimilarProduct(props){


    function renderLayout(){
        return props.position 
        ? 'odd'
        : 'even'
    }


    return(
        <div className={`similar-product ${renderLayout()}`}>
            <div className='similar-product-container'>
                <div className='image'>
                    <img src={img} alt={'placeholder'} />
                </div>
                <div className='info'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button onClick={()=> { props.addItemToCart(props.item.name, 1 , props.item.id);}}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default SimilarProduct;