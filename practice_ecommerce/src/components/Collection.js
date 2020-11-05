import React from 'react';
import { connect } from 'react-redux'
import {currentItem} from '../redux/actions/actions';

import '../styles/Collection.scss';

function Collection(props){

    function renderProducts(){
        return props.item.map((product, index) => {
            return (
                    <button onClick={()=> updateCurrentAndLoadProductPage(product)} key={index} 
                    style={
                        {
                            backgroundImage: `url(${product.img[0].default})`,
                            backgroundSize: 'cover'
                        }
                    }>  
                    </button>
            )
        });
    };

    function updateCurrentAndLoadProductPage(product){
        props.currentItem(product.name, product.id, product.img, product.price);
        props.updatePath(`/products/${product.id}`);
    }

    return(
        <div className='collection'>
            <div className='container'>
                <div className='title'>
                    <h2>{props.name}</h2>
                </div>
                <div className='image-container'>
                    {renderProducts()}
                </div>
            </div>
        </div>
    )
}





export default connect(
    null,
    { 
        currentItem
     }
  )(Collection)