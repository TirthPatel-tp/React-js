import React from 'react';
import Logo from '../../Img/logo.png';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css'

function Navbar({ openContactModal }) {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light custom-navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} width="45" alt="Logo-nav" className="d-inline-block align-middle mr-2" />
                    <span className="text-uppercase font-weight-bold">KJ-Infrastructure</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto font-weight-bold">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <FaHome className="icon" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <FaInfoCircle className="icon" /> About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/project" className="nav-link">
                                <FaProjectDiagram className="icon" /> Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link font-weight-bold" onClick={openContactModal}>
                                <FaEnvelope className="icon" /> Contact Us
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
