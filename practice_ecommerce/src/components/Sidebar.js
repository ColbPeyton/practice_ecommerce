import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

import icon from '../assets/icons/icon-temp.png'


import '../styles/Sidebar.scss';

function Sidebar(props){

    const [active, setActive] = useState(true);


    useEffect(()=>{
       setActive(props.sidebar)
    }, [props.sidebar]);


    // call parent function to disable sidebar when link is clicked
    function disable(){
        setActive(false);
        props.disableSidebar();
    }


    return(
        <div className={`sidebar ${active ? 'active' : ''}`} style={ {animation: `${active ? "slideInSide" : "slideOutSide"} 0.5s forwards`} }>
            <div className='sidebar-container' style={{top: 0}}>
                <div className='sidebar-logo'>
                    <NavLink className='link' to='/' onClick={() => disable()}>
                        <img src={icon} alt='Home icon'/>
                    </NavLink> 
                </div>
                <div className='sidebar-container-links'>
                    {/* <nav>
                        <ul>
                            {props.routes.map((route, index) => <li onClick={()=> disable()} key={index}>{route}</li> )}
                        </ul>
                    </nav> */}
                </div>
 
            </div>
        </div>
    )
}

export default Sidebar;