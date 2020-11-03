import React from 'react';
import { connect } from 'react-redux'

import {currentItem} from '../../redux/actions/actions';
import productData from '../../_data/products';


import '../../styles/Products.scss';

function Products(props){

    function renderProducts(){
        return productData.map((product, index) => {
            return <button onClick={()=> updateCurrentAndLoadProductPage(product)} key={index}>
                        {product.name}
                </button>
        })
    }

    function updateCurrentAndLoadProductPage(product){
        props.currentItem(product.name, product.id);
        props.history.push(`/product/${product.id}`);
    }
    return(
        <main className='products'>
            <div className='products-container'>
            {renderProducts()}
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
