import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

import logo from '../assets/icons/icon-temp.png'


import '../styles/Sidebar.scss';

function Sidebar(props){

    const [active, setActive] = useState(true);


    useEffect(()=>{
       setActive(props.cart)
    }, [props.cart]);


    // call parent function to disable sidebar when link is clicked
    // function disable(){
    //     setActive(false);
    //     props.disableSidebar();
    // }


    return(
        <div className={`sidebar ${active ? 'active' : ''}`} style={ {animation: `${active ? "slideIn" : "slideOut"} 0.5s forwards`} }>
            <div className='sidebar-container' style={{top: 0}}>

            </div>
        </div>
    )
}

export default Sidebar;