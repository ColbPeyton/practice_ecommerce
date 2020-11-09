import React from 'react';

import '../styles/SimilarProduct.scss';

function SimilarProduct(props){

    // console.log(props)
    // const [clicked, setClicked] = useState(false);

    // // Check if product is located in cart. Will update button text 
    // useEffect(()=>{
    //     function checkIfInCart(){
    //         return props.cart.some(item => item.id === props.item.id);
    //     }
    //     setClicked(checkIfInCart())
    // },[props.cart, props.item.id])

    function renderImage(){
        return props.item.promo === ''
        ? props.item.img[0].default
        : props.item.promo.default
    }


    function updateCurrentAndLoadProductPage(product){
        props.currentItem(product.name, product.id, product.img, product.price, product.desc, product.details, product.promo, product.tags );
        props.updatePath(`/products/${product.id}`);
    }
    return(
        <div className={`similar-product`}>
            <div className='similar-product-container'>
                <div className='image'>
                    <img src={renderImage()} alt={props.item.name} />
                </div>
                <div className='info'>
                    <p>{props.item.name}</p>
                    <button onClick={()=> {updateCurrentAndLoadProductPage(props.item);}}>View!</button>
                </div>
            </div>
        </div>
    );
}

export default SimilarProduct;