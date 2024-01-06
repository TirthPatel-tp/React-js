import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from "../../Img/logo.png";

function Footer() {
  return (
    <div className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/">
              <img src={Logo} alt='Logo' style={{ width: '100%', maxWidth: '150px' }} />
            </Link>
          </div>
          <div className="col-md-3">
            <h3>Navigation</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/project">Projects</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
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
            <p><a href="tel:+919904449523">+91 9904449523</a></p>
            <h3>Email Us</h3>
            <p><a href="mailto:info@kjinfrastructure.com">info@kjinfrastructure.com</a></p>
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
