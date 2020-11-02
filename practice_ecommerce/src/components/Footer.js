import React from 'react';

import '../styles/Footer.scss';

function Footer(props){
    return(
        <footer className='footer'>
            <div className='footer-container'>
                <div className='socials'>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-etsy"></i>
                </div>
                <div className='info'>
                    <ul>
                        <li>Lorem </li>
                        <li>Lorem </li>
                        <li>All Right Reserved &reg;</li>
                    </ul>
                </div>
            </div> 
        </footer>
    )
};

export default Footer;