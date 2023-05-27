import React, { useState } from 'react';
import Onsearch from '../Onsearch/Onsearch';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
function Navbar(props) {
    const isActive = true;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
    return ( 
   
     <div className="NavContainer">
        <div className="nav-container">

        {/* <div className='nav-logo'>Rick</div> */}
        <button className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'line-open' : ''}`}></div>
        <div className={`line ${isOpen ? 'line-open' : ''}`}></div>
        <div className={`line ${isOpen ? 'line-open' : ''}`}></div>
      </button>
     <div className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
     <NavLink  to={'/favorites'} className={isActive ? 'nav-link' : ''}  ><button className="nav_btn" >Favorites</button></NavLink>
     <NavLink  to={'/home'} className={isActive ? 'nav-link' : ''}  ><button className="nav_btn" >Home</button></NavLink>
     <NavLink  to={'/About'} className={isActive ? 'nav-link' : ''}  ><button className="nav_btn" >About</button></NavLink>
     </div>
        </div>

     <div className="searchContainer">
     <Onsearch onSearch={props.idRick} />

     </div>
     </div>
     );
}

export default Navbar;