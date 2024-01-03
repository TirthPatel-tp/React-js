// Footer.jsx

import React from 'react';
import './Footer.css';  // Import the CSS file for Footer styling
import Logo from "../../Img/logo.png"


function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
        <div className="col-md-3">
            <img src={Logo} alt='Logo' style={{ width: '100%', maxWidth: '150px' }} />
          </div>
          <div className="col-md-3">
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Projects</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>We Realize your Dream</h3>
            <p>
              KJ Infrastructure brings to you “A Viewtifull life” the Most Beautifully Designed Project “KJ Exotica 5 BHK Viewtiful Homes” Nestled…
            </p>
          </div>
          <div className="col-md-3">
              <h3>Head Office</h3>
              <p>
                KJ infrastructure,
                Platinum Plazza, Navjivan mill Compound Kalol, Gujarat.
              </p>
              <h3>Contact Us</h3>
              <p>+91 9904449523</p>
              <h3>Email Us</h3>
              <p>info@kjinfrastructure.com</p>
            </div>

        </div>
      </div>

      <div className="copyright text-center">
        <p>@2023 KJ Infrastructure. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
