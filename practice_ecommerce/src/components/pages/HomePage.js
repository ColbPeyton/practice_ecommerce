import React from 'react';
import { withRouter} from 'react-router-dom';

import productData from '../../_data/products';

import Collection from '../Collection';

import '../../styles/HomePage.scss';

function HomePage(props){

    function updatePath(path){
        console.log(path)
        props.history.push(`${path}`);
    }
    
    return(
        <main className='home'>
            <div className='home-container'>
                <div className='title'>
                    <h1>Website Title</h1>
                </div>
                <div className='content'>
                    <Collection name={'Dogs'} item={[productData[0], productData[1],productData[2]]} updatePath={updatePath}/>
     
                </div>
            </div>
        </main>
    )
};

export default withRouter(HomePage);