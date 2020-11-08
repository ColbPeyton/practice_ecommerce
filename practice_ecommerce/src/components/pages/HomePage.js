import React from 'react';
import { withRouter} from 'react-router-dom';

import {printData} from '../../_data/products';

import Collection from '../Collection';

import '../../styles/HomePage.scss';


// images
import banner from '../../assets/images/Branding/Etsy Banner 2-02.jpg';

function HomePage(props){

    function updatePath(path){
        props.history.push(`${path}`);
    }
    
    return(
        <main className='home'>
            <div className='home-container'>
                <div className='title'>
                    <img src={banner}  alt='pixel bee creative shop'/>
                </div>
                <div className='content'>
                    <Collection name={'Dogwarts'} item={[printData[0], printData[1],printData[2]]} updatePath={updatePath}/>
     
                </div>
            </div>
        </main>
    )
};

export default withRouter(HomePage);