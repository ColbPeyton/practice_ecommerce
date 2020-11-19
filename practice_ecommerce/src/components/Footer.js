import React from 'react';

import '../styles/Footer.scss';

import footerImage from '../assets/images/Branding/footer_image.png';
const colb = 'https://www.colbypeyton.com/';
const instagram = '';
const etsy = '';
const pinterest = '';

function Footer(props){

    function renderFooter(){
        return props.width < 768
        ? smallFooter()
        : largeFooter()
    }
    
    function largeFooter(){
        return(
            <footer className='footer large'>
                <div className='footer-container'>
                    <div className='img-container'>
                        <img src={footerImage} alt='Me' />
                    </div>
                    <div className='info'>
                        <ul>
                            <li>Lorem </li>
                            <li>Lorem </li>
                        </ul>
                    </div>
                    <div className='socials'>
                        <a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                        <a href={etsy} target="_blank" rel="noreferrer"><i className="fab fa-etsy" /></a>
                        <a href={pinterest} target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"/></a>
                    </div>
          
                </div> 
                <div className='dev'>
                        <p>Developed by <a href={colb} target="_blank" rel="noreferrer">ColbPeyton</a></p>
                    </div>
            </footer>
        )
    }

    function smallFooter(){
        return(
            <footer className='footer small'>
                <div className='footer-container'>
                    <div className='socials'>
                        <a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                        <a href={etsy} target="_blank" rel="noreferrer"><i className="fab fa-etsy" /></a>
                        <a href={pinterest} target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"/></a>
                    </div>
                    <div className='info'>
                        <ul>
                            <li>Lorem </li>
                            <li>Lorem </li>
                            <li>Developed by <a href={colb} target="_blank" rel="noreferrer">ColbPeyton</a></li>
                        </ul>
                    </div>
                </div> 
        </footer>
        )
    }
    return(
        renderFooter()
    )
};

export default Footer;