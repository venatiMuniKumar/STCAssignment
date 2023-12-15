import React from 'react';
import Image from '../Assets/stc logo.jpg';
import './index.css';
import { Button, IconButton } from '@mui/material';
import { Search, ShoppingBasket, ExitToApp } from '@mui/icons-material'; // Import icons from Material-UI

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Image} alt="Company Logo" />
      </div>
      <nav className="header__nav">
        <a href="/deals" className="header__link">Deals</a>
        <a href="/devices" className="header__link">Devices</a>
        <a href="/mobile" className="header__link">Mobile</a>
        <a href="/internet" className="header__link">Internet</a>
        <a href="/gaming" className="header__link">Gaming</a>
        <a href="/entertainment" className="header__link">Entertainment</a>
        <a href="/sales-support" className="header__link">Sales & Support</a>
        <a href="/5g" className="header__link">5G</a>
      </nav>
      <div className="header__actions">
        <IconButton className="header__login-button" aria-label="Search">
          <Search />
        </IconButton>
        <IconButton className="header__cart-button" aria-label="Cart">
          <ShoppingBasket />
        </IconButton>
        <Button className="header__login-button" variant="outlined"endIcon={<ExitToApp />}>
          Login
        </Button>
      </div>
    </header>
  );
};

export default Header;
