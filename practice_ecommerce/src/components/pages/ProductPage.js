import React, {useEffect, useState, useRef} from 'react';

import { connect } from 'react-redux'
import { addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart, currentItem} from '../../redux/actions/actions';

import SimilarProduct from '../SimilarProduct';
import ProductCarousel from '../ProductCarousel';

import img from '../../assets/images/placeholderProductImage.jpg';

// Helpers
import {findItem, getIDFromPath, checkIfProductPath} from '../../_helpers/findItem';

import '../../styles/ProductPage.scss';

function ProductPage(props){

    const [viewedItem, setViewedItem] = useState(props.item);
    const path = useRef(getIDFromPath(window.location.href));

    useEffect(()=>{
        if(props.item.id !== path.current[0]){
            console.log('yes', props.item.id, viewedItem)
            setViewedItem(findItem(path.current[0]));
        }else{
            console.log('no', props.item.id, viewedItem)

            setViewedItem(props.item)
        }
    }, [checkIfProductPath(window.location.href)], path)


    return(
        <main className='product-page'>
           <div className='product-container'>
               <div className='product'>
                    <div className='img'>
                    <img src={viewedItem.img[0].default} alt={viewedItem.name} />
                </div>
                    <div className='name'>
                        <h2>{viewedItem.name}</h2>
                    </div>
                    <div className='desc'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum eleifend purus, 
                        vitae convallis mi ultricies a. Maecenas mollis, mi eget pellentesque consequat, sapien nisi 
                        interdum neque, eget porta erat augue vitae nunc.</p>
                    </div>
               </div>
                <div className='cart-option'>
                    <button onClick={()=> { props.addItemToCart(viewedItem.name, 1 , viewedItem.id);}}>Add To Cart</button>
                </div>
           </div> 

           <div className='similar-products'>
           <div className='similar-title'>
                <h2>Check Out Something Similar</h2>
            </div>
            <div className='products'>
                <ProductCarousel products={[
                    <SimilarProduct addItemToCart={props.addItemToCart} position={true} item={{name: 'bird', id: 2, img:img}}/>,
                    <SimilarProduct addItemToCart={props.addItemToCart} position={false} item={{name: 'bird', id: 3, img:img}}/>,
                    <SimilarProduct addItemToCart={props.addItemToCart} position={true} item={{name: 'bird', id: 4, img:img}}/>,
                    <SimilarProduct addItemToCart={props.addItemToCart} position={false} item={{name: 'bird', id: 5, img:img}}/>
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