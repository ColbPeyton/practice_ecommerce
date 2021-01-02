import React from 'react';
import { withRouter} from 'react-router-dom';

import {completeData} from '../../_data/products';

import Collection from '../Collection';

import '../../styles/HomePage.scss';


// images
import heroMobile from '../../assets/images/Branding/Hero_mobile.jpg';
import heroLarge from '../../assets/images/Branding/Hero_large.jpg'
import banner from '../../assets/images/Branding/Home_Find.jpg';
import gift from '../../assets/images/Branding/Home_Gift.jpg';
import heart from '../../assets/images/Branding/Home_Heart.jpg';
import leaf from '../../assets/images/Branding/Home_Leaf.jpg';



function HomePage(props){

    function updatePath(path){
        props.history.push(`${path}`);
    }

    function renderHeroImage(){
        return props.width > 768
        ? heroLarge
        : heroMobile
    }

    function renderCollection(){
        return props.width >= 576
        ? <Collection name={'Dogwarts'} item={[completeData[9], completeData[2],completeData[1], completeData[13], completeData[3], completeData[4], completeData[5], completeData[6]]} updatePath={updatePath}/>
        : <Collection name={'Dogwarts'} item={[completeData[0], completeData[2],completeData[1], completeData[3], completeData[4], completeData[5]]} updatePath={updatePath}/>
    }
    
    return(
        <main className='home'>
            <div className='home-container'>
                <div className='title'>
                    <img src={renderHeroImage()}  alt='pixel bee creative shop'/>
                </div>
                <div className='banner'>
                    <img src={banner}  alt='find something'/>
                </div>
                <div className='content'>
                    {renderCollection()}
                </div>
                <div className='tags'>
                    <div>
                        <div>
                            <img src={heart}  alt='heart icon'/>
                        </div>
                        <h3>positivity</h3>
                        <p>Every design is created to spread smiles, joy, and positivity.</p>
                    </div>
                    <div>
                        <div>
                            <img src={leaf}  alt='leaf icon'/>
                        </div>
                        <h3>eco-friendly</h3>
                        <p>Eco-friendly materials are used at every step in the process.</p>
                    </div>
                    <div>
                        <div>
                            <img src={gift}  alt='gift icon'/>
                        </div>
                        <h3>a gift</h3>
                        <p>Even the smallest order is crafted to be a special experience.</p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default withRouter(HomePage);