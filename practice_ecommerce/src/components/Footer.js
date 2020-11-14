import React from 'react';

import '../styles/Footer.scss';

const colb = 'https://www.colbypeyton.com/';
const instagram = ''
const etsy = ''

function Footer(props){
    return(
        <footer className='footer'>
            <div className='footer-container'>
                <div className='socials'>
                    <a href={instagram} target="_blank"><i className="fab fa-instagram" /></a>
                    <a href={etsy} target="_blank"><i className="fab fa-etsy" /></a>
                </div>
                <div className='info'>
                    <ul>
                        <li>Lorem </li>
                        <li>Lorem </li>
                        <li>Developed by <a href={colb} target="_blank">ColbPeyton</a></li>
                    </ul>
                </div>
            </div> 
        </footer>
    )
};

export default Footer;