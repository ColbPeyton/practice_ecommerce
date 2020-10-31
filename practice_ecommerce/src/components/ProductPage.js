import React, {useRef} from 'react';
import { connect} from 'react-redux'
import { addItemToCart } from '../redux/actions/actions'


function ProductPage(props){

    return(
        <div className='productPage'>
            <h1>{props.name}</h1>
            <button onClick={()=> props.addItemToCart(props.name, 1 , 1)}>submit</button>
        </div>

        
    )
}

export default connect(
    null,
    { addItemToCart }
  )(ProductPage)
