import React,{useState} from 'react';
import { connect } from 'react-redux'

import {currentItem} from '../../redux/actions/actions';
import {completeData} from '../../_data/products';

import banner from '../../assets/images/Branding/Products_Banner.jpg';

import '../../styles/Products.scss';

function Products(props){

    const [catagory, setCatagory] = useState('all');
    const [filter, setFilter] = useState('');

    function renderProducts(){
        // eslint-disable-next-line
        return completeData.map((product, index) => {
            if(product.tags.includes(catagory) || catagory === 'all'){
                if(!filter){
                    return <button className='product-item' onClick={()=> updateCurrentAndLoadProductPage(product)} key={index} 
                        style={
                            {
                                backgroundImage: `url(${product.img[0].default})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }
                        }>  
                    </button>
                }
                return product.tags.includes(filter)
                    ?<button className='product-item' onClick={()=> updateCurrentAndLoadProductPage(product)} key={index} 
                        style={
                            {
                                backgroundImage: `url(${product.img[0].default})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center'
                            }
                        }>  
                    </button>
                    : ''
            }
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
        props.currentItem(product.name, product.id, product.img, product.price, product.desc, product.details, product.promo, product.tags );
        props.history.push(`/products/${product.id}`);
    }

    function renderActive(id, active){
        return id === active
        ? 'active'
        : '';
    }

    function updateGridSizing(){
        switch(catagory){
            case 'sticker':
                return 'sticker';
            case 'print':
                return 'print';
            default:
                return 'all'
        }
    }

    function updateFilter(el){
        if(el === filter){
            setFilter('')
        }else{
            setFilter(el)
        }
    }

    return(
        <main className='products'>

            <div className='products-container'>
            <div className='banner'>
                   <img src={banner} alt='product banner' />
               </div>
            <div className='catagories-container'>
                <div className='catagories'>
                    <button className={`${renderActive('all', catagory)}`} onClick={() => setCatagory('all')}>All</button>
                    <button className={`${renderActive('print', catagory)}`} onClick={() => setCatagory('print')}>Prints</button>
                    <button className={`${renderActive('sticker', catagory)}`} onClick={() => setCatagory('sticker')}>Stickers</button>
                </div>
                <div className='filters'>
                    <button className={`${renderActive('bundle', filter)}`} onClick={() => updateFilter('bundle') }>Bundles</button>
                    <button className={`${renderActive('eco-friendly', filter)}`} onClick={() => updateFilter('eco-friendly')}>Eco-Friendly</button>
                </div>
            </div>

            <div className={`products-listed ${updateGridSizing()} ${filter}`}>
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
