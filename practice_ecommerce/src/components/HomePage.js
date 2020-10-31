import React from 'react';
import SearchBar from './SearchBar'

import '../styles/HomePage.scss';

function HomePage(props){
    return(
        <div className='home'>
            <SearchBar />
        </div>
    )
};

export default HomePage;