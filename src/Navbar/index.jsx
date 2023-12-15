import React from 'react';
import './index.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__segments">
        <a href="/" className="navbar__segment">PERSONAL</a>
        <a href="/business" className="navbar__segment">BUSINESS</a>
        <a href="/wholesale" className="navbar__segment">WHOLESALE</a>
      </div>
      <div className="navbar__utilities">
        <a href="/quick-pay" className="navbar__utility">QUICK PAY & RECHARGE</a>
        
      </div>
    </div>
  );
};

export default NavBar;
