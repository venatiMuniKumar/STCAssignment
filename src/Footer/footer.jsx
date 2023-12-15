// FooterComponent.jsx
import React from 'react';
import './footerCss.css'; // make sure to create this CSS file
import logo from '../Assets/stc logo.jpg'; // Update with the path to your image file


const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <span>© stc 2023 - All rights reserved</span>
        </div>
        <div className="footer-links">
          <a href="/documents">Important documents</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms & conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
