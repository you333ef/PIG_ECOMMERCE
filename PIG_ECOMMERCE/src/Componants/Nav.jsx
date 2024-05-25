import React, { useState } from 'react';
import './nav.css';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegSun } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { GiMoonOrbit } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Nav = ({ dark, isDark, cart }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className='container all navbar navbar-expand-lg navbar-light bg-light psps'>
      <button 
        className="navbar-toggler psps" 
        type="button" 
        onClick={handleNavCollapse}
        aria-controls="navbarTogglerDemo01" 
        aria-expanded={!isNavCollapsed} 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo01">
        <div className="onceDepartment col-lg-2 col">
          {isNavCollapsed ? <TiShoppingCart className='shop' /> : null}
        </div>

        <div className="twiceDepartment col-lg-7 col">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className='nav-item active'><Link to="/" className='nav-link'>Home</Link></li>
            <li className='nav-item active'><Link to="/About" className='nav-link'>About</Link></li>
            <li className='nav-item active'><Link to="/Shop" className='nav-link'>Shop</Link></li>
            <li className='nav-item active'><Link to="/Services" className='nav-link'>Services</Link></li>
            <li className='nav-item active'><Link to="/Contact" className='nav-link'>Contact</Link></li>
          </ul>
        </div>

        <div className="thirdDepartment col-lg-3 col">
          <div>
            {dark ? <GiMoonOrbit className='heart' onClick={isDark} /> : <FaRegSun className='heart' onClick={isDark} />}
          </div>
          <Link to='/Cart'>
            <RiShoppingBag2Fill className='bag' style={{ color: 'black' }} />
            <small>{cart.length}</small>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
