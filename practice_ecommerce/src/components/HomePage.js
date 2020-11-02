import React from 'react';
import ProductPage from './ProductPage';

import '../styles/HomePage.scss';

function HomePage(props){
    return(
        <div className='home'>
            <ProductPage name={'Test'}/>
        </div>
    )
};

export default HomePage;