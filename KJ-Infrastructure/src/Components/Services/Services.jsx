import React from 'react';
import img1 from "../../Img/1-Construction.png";
import img2 from "../../Img/2-Residential.png";
import img3 from "../../Img/3-Commertial.png";
import './Services.css'; 
import OrangeImage from "../../Img/BG-Image-4.png"
import BuildingImage from "../../Img/BG-Image-3.png"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaTasks, FaUsers, FaTrophy, FaSmile } from 'react-icons/fa';


function Services() {
    
    return (
        <div className="services-container">
            <div className="services-section">
                <h1 className="text-center mb-5">Our Services</h1>

                <div className="row ">
                <div className='row my-element'>
                    <div className="col-md-4">
                        <div className="service-item">
                            <img
                                src={img1}
                                className="service-img"
                                alt="House Construction"
                            />
                            <div className="service-content">
                                <h5 className="service-title"> House Construction</h5>
                                <p className="service-text">
                                    We have constructed Multi Storied buildings for residential, schools, colleges, and hostels.
                                    Our in-house team is equipped with all the plants and machinery required for building construction.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service-item">
                            <img
                                src={img2}
                                className="service-img"
                                alt="Residential Development"
                            />
                            <div className="service-content">
                                <h5 className="service-title">Residential Development</h5>
                                <p className="service-text">
                                    We have constructed Multi Storied buildings for residential, schools, colleges, and hostels.
                                    Our in-house team is equipped with all the plants and machinery required for building construction.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="service-item">
                            <img
                                src={img3}
                                className="service-img"
                                alt="Commercial Development"
                            />
                            <div className="service-content">
                                <h5 className="service-title">Commercial Development</h5>
                                <p className="service-text">
                                    We have constructed Multi Storied buildings for residential, schools, colleges, and hostels.
                                    Our in-house team is equipped with all the plants and machinery required for building construction.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="overlapping-section container service-component">
                        <div className="row my-element">
                            <div className="col-md-5 image position-relative">
                                {/* eslint-disable-next-line */}
                                <img
                                    src={OrangeImage}
                                    alt="Orange Image"
                                    className="img-fluid orange position-absolute "
                                    style={{ zIndex: 0, left: '26px', top: '-10px' }} 
                                />
                                {/* eslint-disable-next-line */}
                                <img
                                    src={BuildingImage}
                                    alt="Building Image"
                                    className="img-fluid build position-absolute "
                                    style={{ zIndex: 0 }}
                                />
                            </div>


                            {/* Right side: Contact Information */}
                            <div className="col-md-6 contact-info">
                                <h1 className=" mt-5 mb-4">Head Office</h1>
                                <p> <FaMapMarkerAlt className='me-2' /> KJ infrastructure, Platinum Plazza, Navjivan mill Compound Kalol, Gujarat.</p>

                                <h1 className="mt-5 mb-4">Contact Us</h1>
                                <p><FaPhone className="me-2" /><a href="tel:+91 9904449523"> +91 9904449523</a></p>

                                <h1 className="mt-5 mb-4">Email Us</h1>
                                <p><FaEnvelope className="me-2" /> <a href="mailto:info@kjinfrastructure.com">info@kjinfrastructure.com</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="container experience " style={{ position: 'relative', zIndex: 1 }}>
                        <h1 className="text-center mb-5"> 5 Years Experience</h1>

                        <div className="row text-center">
                            <div className="col-md-3">
                                <FaTasks size={60} color="#666" />
                                <h2>10</h2>
                                <p>Projects Done</p>
                            </div>
                            <div className="col-md-3">
                                <FaUsers size={60} color="#666" />
                                <h2>50</h2>
                                <p>Employees</p>
                            </div>
                            <div className="col-md-3">
                                <FaTrophy size={60} color="#666" />
                                <h2>2</h2>
                                <p>Awards Won</p>
                            </div>
                            <div className="col-md-3">
                                <FaSmile size={60} color="#666" />
                                <h2>500</h2>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 0, width: '100%' }}
                    >
                        {/* First wave */}
                        <path
                            fill="#FFA500"
                            fillOpacity="1"
                            d="M0,224L48,202.7C96,181,192,139,288,160C384,181,480,267,576,272C672,277,768,203,864,138.7C960,75,1056,21,1152,37.3C1248,53,1344,139,1392,181.3L1440,224L1440,320L0,320Z"
                        ></path>
                        {/* Second wave */}
                        <path
                            fill="#FFA500"
                            fillOpacity="0.5"
                            d="M0,64L48,96C96,128,192,192,288,218.7C384,245,480,235,576,197.3C672,160,768,96,864,85.3C960,75,1056,117,1152,154.7C1248,192,1344,224,1392,240L1440,256L1440,320L0,320Z"
                        ></path>
                        {/* Third wave */}
                        <path
                            fill="#FFA500"
                            fillOpacity="0.3"
                            d="M0,192L48,170.7C96,149,192,107,288,117.3C384,128,480,192,576,208C672,224,768,192,864,144C960,96,1056,32,1152,48C1248,64,1344,160,1392,208L1440,256L1440,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Services;
