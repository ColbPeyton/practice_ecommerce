import React from 'react';
import '../styles/Loading.scss';

function Loading(){
    return(
        <div className='loading-container'>
            <div clasName='circle' id='ball-1'> </div>
            <div clasName='circle' id='ball-2'> </div>
            <div clasName='circle' id='ball-3'> </div>
            <div clasName='circle' id='ball-4'> </div>
        </div>
    )
}