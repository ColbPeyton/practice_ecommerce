import React from 'react';
import { withRouter} from 'react-router-dom';

import {completeData} from '../../_data/products';

import Collection from '../Collection';

import '../../styles/HomePage.scss';


// images
import banner from '../../assets/images/Branding/Home_Banner.jpg';
import find from '../../assets/images/Branding/Home_Find.jpg';
import gift from '../../assets/images/Branding/Home_Gift.jpg';
import heart from '../../assets/images/Branding/Home_Heart.jpg';
import leaf from '../../assets/images/Branding/Home_Leaf.jpg';



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
                    <div className='collection'>
                        <Collection name={'Dogwarts'} item={[completeData[0], completeData[1],completeData[2], completeData[3], completeData[4], completeData[8]]} updatePath={updatePath}/>
                    </div>
     
                </div>
            </div>
        </main>
    )
};

export default withRouter(HomePage);