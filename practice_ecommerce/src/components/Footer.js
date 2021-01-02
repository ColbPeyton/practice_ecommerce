import React from 'react';

import '../styles/Footer.scss';

import footerImage from '../assets/images/Branding/footer_image.png';
const colb = 'https://www.colbypeyton.com/';
const instagram = 'https://www.instagram.com/pixelbeecreative/';
const etsy = 'https://www.etsy.com/shop/PixelBeeCreativeShop';
const pinterest = 'https://www.pinterest.com/pixelbeecreative/';

function Footer(props){

    function renderFooter(){
        // Fixing footer issue with large iphones. Will find another solution TEMP
        return props.width < 768 || props.width === 812
        ? smallFooter()
        : largeFooter()
    }
    
    function largeFooter(){
        return(
            <footer className='footer large'>
                <div className='footer-container'>
                    <a className='img-container' href = "mailto: Pixelbeecreative@gmail.com" >
                        <img src={footerImage} alt='Me' />
                    </a>
                    <div className='info'>
                        <ul>
                            <li className='tag'>Illustrations, Stickers, & More!</li>
                            <li>Contact me at: <a className='email' href = "mailto: Pixelbeecreative@gmail.com">pixelbeecreative@gmail.com</a></li>
                        </ul>
                        <div className='dev'>
                            <p>Developed by <a href={colb} target="_blank" rel="noreferrer">ColbPeyton</a></p>
                        </div>
                    </div>
                    <div className='socials'>
                        <a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a>
                        <a href={etsy} target="_blank" rel="noreferrer"><i className="fab fa-etsy" /></a>
                        <a href={pinterest} target="_blank" rel="noreferrer"><i className="fab fa-pinterest-p"/></a>
                    </div>
          
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
                            <li className='tag'>Illustrations, Stickers, & More!</li>
                            <li>Contact me at: <a className='email' href = "mailto: pixelbeecreative@gmail.com">pixelbeecreative@gmail.com</a></li>
                            <li>Developed by <a className='dev' href={colb} target="_blank" rel="noreferrer">ColbPeyton</a></li>
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