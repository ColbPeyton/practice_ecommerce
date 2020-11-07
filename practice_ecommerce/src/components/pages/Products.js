import React,{useState, useRef} from 'react';
import { connect } from 'react-redux'

import {currentItem} from '../../redux/actions/actions';
import {completeData, printData, stickerData} from '../../_data/products';


import '../../styles/Products.scss';

function Products(props){

    const [catagory, setCatagory] = useState(completeData);
    // const products = useRef(renderProducts())

    function renderProducts(catagory){
        return catagory.map((product, index) => {
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

    // function updateStylingCatagory(){
    //     switch(catagory){
    //         case printData:
    //             return 'print';
    //         case stickerData:
    //             return 'sticker'
    //         default:
    //             return 'all'
    //     }
    // }

    function updateCurrentAndLoadProductPage(product){
        props.currentItem(product.name, product.id, product.img, product.price );
        props.history.push(`/products/${product.id}`);
    }
    return(
        <main className='products'>
            <div className='products-container'>
            <div className='product-title'>All Products</div>
            <div className='catagories'>
                <button onClick={() => setCatagory(printData)}>Prints</button>
                <button onClick={() => setCatagory(stickerData)}>Stickers</button>
                <button onClick={() => setCatagory(completeData)}>All</button>
            </div>
            <div className='products-listed'>
                {renderProducts(catagory)}
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
