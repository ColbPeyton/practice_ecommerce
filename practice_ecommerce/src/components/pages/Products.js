import React,{useState, useRef} from 'react';
import { connect } from 'react-redux'

import {currentItem} from '../../redux/actions/actions';
import {completeData, printData, stickerData} from '../../_data/products';

import banner from '../../assets/images/Branding/Products_Banner.jpg';

import '../../styles/Products.scss';

function Products(props){

    const [catagory, setCatagory] = useState(completeData);
    // const products = useRef(renderProducts())

    function renderProducts(catagory){
        return catagory.map((product, index) => {
            return <button className='product-item' onClick={()=> updateCurrentAndLoadProductPage(product)} key={index} 
                    style={
                        {
                            backgroundImage: `url(${product.img[0].default})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }
                    }>  
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
        props.currentItem(product.name, product.id, product.img, product.price, product.desc, product.details, product.promo );
        props.history.push(`/products/${product.id}`);
    }

    function renderActiveButton(id){
        return id === catagory
        ? 'active'
        : '';
    }

    function updateGridSizing(){
        switch(catagory){
            case stickerData:
                return 'sticker';
            case printData:
                return 'print';
            default:
                return 'all'
        }
    }

    return(
        <main className='products'>

            <div className='products-container'>
            <div className='banner'>
                   <img src={banner} alt='product banner' />
               </div>
            <div className='catagories'>
                <button className={`${renderActiveButton(completeData)}`} onClick={() => setCatagory(completeData)}>All</button>
                <button className={`${renderActiveButton(printData)}`} onClick={() => setCatagory(printData)}>Prints</button>
                <button className={`${renderActiveButton(stickerData)}`} onClick={() => setCatagory(stickerData)}>Stickers</button>
            </div>
            <div className={`products-listed ${updateGridSizing()}`}>
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
