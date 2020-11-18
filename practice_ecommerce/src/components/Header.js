import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Sidebar from './Sidebar';
// import SearchBar from './SearchBar';
import Cart from './Cart';

import logo from '../assets/images/Branding/Pixel Bee Logo.png'
import cartIcon from '../assets/icons/shopping.svg';
import closeIcon from '../assets/icons/close.svg';

import '../styles/Header.scss';


function Header(props){

    
    const [activeCart, setActiveCart] = useState(false);
    const [activeSide, setActiveSide] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [cart, setCart] = useState(false);


    function renderSidebar(){
        return activeSide 
        ? <Sidebar routes={props.routes} sidebar={sidebar} disableSidebar={enableOrDisableSidebar} width={props.width}/>
        : '';
    }

    function renderCart(){
        return activeCart 
        ? <Cart active={cart} width={props.width}/>
        : '';
    }

    
    function enableOrDisableSidebar(){
        if(activeSide){
            setSidebar(false);
            setTimeout(() => {
                setActiveSide(false)
            }, 500);
        }else{
            setSidebar(true)
            setActiveSide(true)
        }

    }
    
    function enableOrDisableCart(){
        if(activeCart){
            setCart(false);
            setTimeout(() => {
                setActiveCart(false)
            }, 500);
        }else{
            setCart(true)
            setActiveCart(true)
        }

    }

    function changeCartIcon(){
        return activeCart
        ? <img className='close-icon' src={closeIcon} alt='close'></img>
        : <img className='cart-icon' src={cartIcon} alt='cart'></img>
    }

    return(
        <div>
            <header className='header-container'>
                <button className={`header-dropdown-container ${activeSide ? 'active' : ''}`} onClick={()=> enableOrDisableSidebar()}>
                    <div className='dropdown'></div>
                    <div className='dropdown'></div>
                    <div className='dropdown'></div>
                </button>
                <div className='header-logo'>
                    <NavLink exact className='link' to='/'>
                        <img src={logo} alt='gym icon'/>
                    </NavLink> 
                </div>
                <button className={`header-cart-container ${activeCart ? 'active' : ''}`} onClick={()=> enableOrDisableCart()}>
                    {changeCartIcon()}
                </button>
            </header>
        {renderSidebar()}
        {renderCart()}
        </div>
    );
};

export default Header;