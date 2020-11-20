import React from 'react';

import {NavLink} from "react-router-dom";

import issue from '../../assets/images/Branding/footer_image.png'
import '../../styles/Page404.scss';

function Page404(){
    return(
        <div className='page404'>
            <div className='page404-container'>
                <div className='img-container'>
                    <img src={issue} alt='something went wrong' />
                </div>
                <div className='btn-container'>
                    <NavLink className='link' to='/'>
                        <p>Let's go home</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default Page404;