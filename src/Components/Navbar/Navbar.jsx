import React from 'react';
import Onsearch from '../Onsearch/Onsearch';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
function Navbar(props) {
    const isActive = true;
    
    
    return ( 
   
     <div className="NavContainer">
     <div className="btnContainer">
     <NavLink  to={'/favorites'} className={isActive ? 'nav-link' : ''}  ><button className="nav_btn" >Favorites</button></NavLink>
     <NavLink  to={'/home'} className={isActive ? 'nav-link' : ''}  ><button className="nav_btn" >Home</button></NavLink>
     <NavLink  to={'/About'} className={isActive ? 'nav-link' : ''}  ><button className="nav_btn" >About</button></NavLink>
     </div>
     <div className="searchContainer">
     <Onsearch onSearch={props.idRick} />

     </div>
     </div>
     );
}

export default Navbar;