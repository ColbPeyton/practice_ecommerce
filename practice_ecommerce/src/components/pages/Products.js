import React from 'react';
import { connect } from 'react-redux'

import {currentItem} from '../../redux/actions/actions';
import {completeData} from '../../_data/products';


import '../../styles/Products.scss';

function Products(props){

    function renderProducts(){
        return completeData.map((product, index) => {
            return <button onClick={()=> updateCurrentAndLoadProductPage(product)} key={index} 
                    style={
                        {
                            backgroundImage: `url(${product.img[0].default})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }
                    }>
                        <div className='product-item' >
                            {/* {product.name} */}
                        </div>
                        
                </button>
        })
    }

    function updateCurrentAndLoadProductPage(product){
        props.currentItem(product.name, product.id, product.img, product.price );
        props.history.push(`/products/${product.id}`);
    }
    return(
        <main className='products'>
            <div className='products-container'>
            <div className='product-title'>All Products</div>
            <div className='products-listed'>
                {renderProducts()}
            </div>
            </div>
        </main>
    )
}

export default connect(
    null,
    { 
        currentItem
     }
  )(Products)
