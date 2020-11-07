import React, {useEffect, useState, useRef} from 'react';

import { connect } from 'react-redux'
import { addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart, currentItem} from '../../redux/actions/actions';

import SimilarProduct from '../SimilarProduct';
import ProductCarousel from '../ProductCarousel';


// Helpers
import {findItem, getIDFromPath, checkIfProductPath, randomProduct} from '../../_helpers/findItem';

import '../../styles/ProductPage.scss';

function ProductPage(props){

    const [viewedItem, setViewedItem] = useState(props.item);
    const path = useRef(getIDFromPath(window.location.href));
    const [clicked, setClicked] = useState(false);
    const [currentImage, setCurrentImage] = useState(viewedItem.img[0].default)

    useEffect(()=>{
        if(props.item.id !== path.current[0]){
            // console.log('yes', props.item.id, viewedItem)
            setViewedItem(findItem(path.current[0]));

        }else{
            // console.log('no', props.item.id, viewedItem)

            setViewedItem(props.item)
        }
    }, [checkIfProductPath(window.location.href)], path)

    // Check if product is located in cart. Will update button text 
    useEffect(()=>{
        function checkIfInCart(){
            return props.cart.some(item => item.id === props.item.id);
        }
        setClicked(checkIfInCart())
    },[props.cart, viewedItem.id])

    function renderButton(){
        return clicked
        ? <button onClick={()=> { props.addItemToCart(viewedItem.name, 1 , viewedItem.id, viewedItem.price);}}>Add Another!</button>
        : <button onClick={()=> { props.addItemToCart(viewedItem.name, 1 , viewedItem.id, viewedItem.price);}}>Add To Cart</button>
    }

    function renderExtraImages(){
        return viewedItem.img.map(((item,index) => {
            if(item.default !== currentImage){
                return <div className='extra-small' key={index} onClick={()=>setCurrentImage(item.default)}><img src={item.default} alt={viewedItem.name}/></div>
            }
        }))
    }
    return(
        <main className='product-page'>
           <div className='product-container'>
               <div className='product'>
                    <div className='img-display'>
                        <div className='img-container'>
                            <img src={currentImage} alt={viewedItem.name} />
                        </div>
                        <div className='img-extra'>
                            {renderExtraImages()}
                        </div>
                </div>
                    <div className='name'>
                        <h2>{viewedItem.name}</h2>
                    </div>
                    <div className='price'>
                        <h3>{viewedItem.price}</h3>
                    </div>
                    <div className='desc'>
                        <p>{viewedItem.desc}</p>
                    </div>
               </div>
                <div className='cart-option'>
                    {renderButton()}
                </div>
           </div> 

           <div className='similar-products'>
           <div className='similar-title'>
                <h2>Check Out Something Similar</h2>
            </div>
            <div className='products'>
                <ProductCarousel products={[
                    <SimilarProduct addItemToCart={props.addItemToCart} position={true} item={randomProduct(viewedItem.id)}/>,
                    <SimilarProduct addItemToCart={props.addItemToCart} position={false} item={randomProduct(viewedItem.id)}/>,
                    <SimilarProduct addItemToCart={props.addItemToCart} position={true} item={randomProduct(viewedItem.id)}/>,
                    <SimilarProduct addItemToCart={props.addItemToCart} position={false} item={randomProduct(viewedItem.id)}/>,
                ]}
                />
            </div>

           </div>
        </main>

        
    )
}
const mapStateToProps = state => {
    return { cart: state.cart, currentlyViewedItem: state.currentlyViewedItem  };
  };

export default connect(
    mapStateToProps,
    { 
        addItemToCart,
        addItemToCartQuanity,
        removeItemFromCart,
        removeItemQuanityFromCart,
        currentItem
     }
  )(ProductPage)




//   <button onClick={()=> { props.addItemToCart(props.name, 1 , 1);}}>add</button>
//   <button onClick={()=> { props.addItemToCart('second', 1 , 2);}}>add</button>
//   <button onClick={()=> { props.addItemToCartQuanity(props.name, 1, 1);}}>add quanity</button>
//   <button onClick={()=> { props.removeItemFromCart(props.name, 1);}}>remove</button>
//   <button onClick={()=> { props.removeItemFromCart('second', 2);}}>remove</button>
//   <button onClick={()=> { props.removeItemQuanityFromCart(props.name, 1 , 1);}}>remove quanity</button>