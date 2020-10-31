import React from 'react';
import SearchBar from './SearchBar'
import ProductPage from './ProductPage';

import '../styles/HomePage.scss';

function HomePage(props){
    return(
        <div className='home'>
            <SearchBar />
            <ProductPage name={'Test'}/>
        </div>
    )
};

export default HomePage;