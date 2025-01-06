import React from 'react';
// import logo from '.../public/logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="nav_bar">
        <div className="Logo">
            <img src="/logo.png" className="logo" alt="logo"/>
        </div>
        <div className="nav_links">
            <a className="link_dec" href="#about">Contact</a>
            <div></div>
            <div></div>
        </div>
    </div>
    <div className="adjustment"></div>
    <div className="adjustment"></div>
    <div className="adjustment"></div>
    <div className="adjustment"></div>
    </div>
  );
};

export default Nav;
