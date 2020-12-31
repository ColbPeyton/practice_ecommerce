import React, {useEffect, useState, useRef} from 'react';

import { connect } from 'react-redux'
import { addItemToCart, addItemToCartQuanity, removeItemFromCart, removeItemQuanityFromCart, currentItem} from '../../redux/actions/actions';

import { withRouter} from 'react-router-dom';


import SimilarProduct from '../SimilarProduct';
import ProductCarousel from '../ProductCarousel';


// Helpers
import {findItem, getIDFromPath, checkIfProductPath, randomProduct} from '../../_helpers/findItem';

import '../../styles/ProductPage.scss';

function ProductPage(props){

    const [viewedItem, setViewedItem] = useState(props.item);
    const path = useRef(getIDFromPath(window.location.href));
    const [clicked, setClicked] = useState(false);
    const [currentImage, setCurrentImage] = useState(props.item.img[0].default)
    const [otherItems, setOtherItems] = useState([]);

    useEffect(()=>{
        if(props.item.id !== path.current[0]){
            // console.log('yes', props.item.id, viewedItem)
            setViewedItem(findItem(path.current[0]));
        }else{
            // console.log('no', props.item.id, viewedItem)
            setViewedItem(props.item)
        }
    }, [checkIfProductPath(window.location.href), path, props.item])

    useEffect(()=>{
        setCurrentImage(viewedItem.img[0].default)
    }, [viewedItem])

    // Sets randomProduct on Item load. Fixes issue with re-rendering on state change
    useEffect(()=>{
        const temp = []
        for(let i = 0; i < 4; i++){
            temp.push(randomProduct(viewedItem.id, temp));
        }
        setOtherItems(temp);
    },[viewedItem.id])

    // Check if product is located in cart. Will update button text 
    useEffect(()=>{
        function checkIfInCart(){
            return props.cart.some(item => item.id === props.item.id);
        }
        setClicked(checkIfInCart())
    },[props.cart, viewedItem.id, props.item.id])

    function renderButton(){
        return clicked
        ? <button onClick={()=> { props.addItemToCart(viewedItem.name, 1 , viewedItem.id, viewedItem.price, viewedItem.img);}}>Add Another!</button>
        : <button onClick={()=> { props.addItemToCart(viewedItem.name, 1 , viewedItem.id, viewedItem.price, viewedItem.img);}}>Add To Cart</button>
    }

    function renderExtraImages(){
        // eslint-disable-next-line
        return viewedItem.img.map(((item,index) => {
            if(item.default !== currentImage){
                return <div className='extra-small' key={index} onClick={()=>setCurrentImage(item.default)}><img src={item.default} alt={viewedItem.name}/></div>
            }
        }))
    }

    function renderProductDetails(){
        return viewedItem.details.map((det, index) => {
            return <p key={index}>{det}</p>
        })
    }

    function updatePath(path){
        props.history.push(`${path}`);
    }

    function renderDisplay(){
        return props.width <= 991
        ? smallView()
        : largeView()
    }

    function renderSimilar(){
        return otherItems.length < 4
        ? ''
        :<ProductCarousel products={[
            <SimilarProduct currentItem={props.currentItem} updatePath={updatePath} position={true} item={otherItems[0]}/>,
            <SimilarProduct currentItem={props.currentItem} updatePath={updatePath} position={false} item={otherItems[1]}/>,
            <SimilarProduct currentItem={props.currentItem} updatePath={updatePath} position={true} item={otherItems[2]}/>,
            <SimilarProduct currentItem={props.currentItem} updatePath={updatePath} position={false} item={otherItems[3]}/>,
        ]}
        />
    }

    function smallView(){
        return(
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
                     <h3>${viewedItem.price}</h3>
                 </div>
                 <div className='desc'>
                     <p>{viewedItem.desc}</p>
                 </div>
                 <div className='details'>
                     {renderProductDetails()}
                 </div>
            </div>
             <div className='cart-option'>
                 {renderButton()}
             </div>
        </div> 
        )
    }
    function largeView(){
        return(
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
                <div className='side-info'>
                    <div className='name'>
                        <h2>{viewedItem.name}</h2>
                    </div>
                    <div className='price'>
                        <h3>${viewedItem.price}</h3>
                    </div>
                    <div className='desc'>
                        <p>{viewedItem.desc}</p>
                    </div>
                    <div className='details'>
                        {renderProductDetails()}
                    </div>
                    <div className='cart-option'>
                        {renderButton()}
                    </div>
                </div>
            </div>
        </div> 
        )
    }


    return(
        <main className='product-page'>
            {renderDisplay()}

           <div className='similar-products'>
           <div className='similar-title'>
                <h2>Check Out Something Similar</h2>
            </div>
            <div className='similar-container'>
                {renderSimilar()}
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
  )(withRouter(ProductPage))




//   <button onClick={()=> { props.addItemToCart(props.name, 1 , 1);}}>add</button>
//   <button onClick={()=> { props.addItemToCart('second', 1 , 2);}}>add</button>
//   <button onClick={()=> { props.addItemToCartQuanity(props.name, 1, 1);}}>add quanity</button>
//   <button onClick={()=> { props.removeItemFromCart(props.name, 1);}}>remove</button>
//   <button onClick={()=> { props.removeItemFromCart('second', 2);}}>remove</button>
//   <button onClick={()=> { props.removeItemQuanityFromCart(props.name, 1 , 1);}}>remove quanity</button>