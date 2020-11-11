import React from 'react';
import { withRouter} from 'react-router-dom';

import {completeData} from '../../_data/products';

import Collection from '../Collection';

import '../../styles/HomePage.scss';


// images
import title from '../../assets/images/Branding/Home_Banner.jpg';
import banner from '../../assets/images/Branding/Home_Find.jpg';
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
                    <img src={title}  alt='pixel bee creative shop'/>
                </div>
                <div className='banner'>
                    <img src={banner}  alt='find something'/>
                </div>
                <div className='content'>
                    <Collection name={'Dogwarts'} item={[completeData[0], completeData[6],completeData[2], completeData[3], completeData[4], completeData[1]]} updatePath={updatePath}/>
                </div>
                <div className='tags'>
                    <div>
                        <img src={heart}  alt='heart icon'/>
                        <h3>postivity</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={leaf}  alt='leaf icon'/>
                        <h3>eco-friendly</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src={gift}  alt='gift icon'/>
                        <h3>a gift</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default withRouter(HomePage);