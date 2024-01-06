import React from 'react';
import OrangeImage from "../../Img/BG-Image-4.png";
import BuildingImage from "../../Img/BG-Image-3.png";
import ChairmanImage from "../../Img/Chairman.jpg"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import "./About.css"

function About() {
    return (
        <>
            <div className=' position-relative'>

                <div className=" about-component container">
                    <div className="row position-relative">


                        {/* Left side: Overlapping Images */}
                        <div className="col-md-5  position-relative max my-element">
                            {/* eslint-disable-next-line */}
                            <img
                                src={OrangeImage}
                                alt="Orange Image"
                                className="img-fluid orange position-absolute top-0 start-0"
                                style={{ zIndex: -1, left: '-10px', top: '-10px' }}
                            />
                            {/* eslint-disable-next-line */}
                            <img
                                src={BuildingImage}
                                alt="Building Image"
                                className="img-fluid build position-absolute top-0 start-0"
                                style={{ zIndex: 0 }}
                            />
                        </div>

                        {/* Right side: Contact Information */}
                        <div className="col-md-6 contact-info">
                            <h1 className=" mt-5 mb-4">Head Office</h1>
                            <p>
                                <FaMapMarkerAlt className='me-2' /> KJ infrastructure, Platinum
                                Plazza, Navjivan mill Compound Kalol, Gujarat.
                            </p>

                            <h1 className="mt-5 mb-4">Contact Us</h1>
                            <p><FaPhone className="me-2" /><a href="tel:+91 9904449523"> +91 9904449523</a></p>

                            <h1 className="mt-5 mb-4">Email Us</h1>
                            <p><FaEnvelope className="me-2" /> <a href="mailto:info@kjinfrastructure.com">info@kjinfrastructure.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="about ">
                    <h1 className="mb-4">About <strong>KJ Infrastructure</strong></h1>
                    <p>
                        <strong>The KJ Infrastructure</strong> has been in its core business of construction and property development. Founded in 2020 by <strong>Shri Kamleshbhai R Patel (USA)</strong>, <strong>KJ Infrastructure</strong> has successfully executed a variety of challenging Building Construction, most of which are with our own structural design. This has helped us innovate and also prosper in the present day competitive construction field.
                    </p>

                    <p>
                        <strong>KJ Infrastructure</strong> is committed to enhancing the Building construction industry in Gujarat. By providing the highest quality products and services, keep adopting proven new technologies and approaches to deliver superior solutions.
                    </p>

                    <p>
                        <strong>KJ Infrastructure</strong> has a good team of engineers & surveyors for planning, designing, execution construction, managing of maintenance and a powerful team of supervisors. The company consists of dynamic management in administration, accounting at the office and field level. We also have a unique team for quality control, safety, and desert management.
                    </p>

                    <p>
                        The <strong>KJ Infrastructure</strong> has successfully completed numerous <strong>Residential</strong>, <strong>Industrial</strong>, and <strong>Commercial projects</strong> within Gujarat. It has a proven track record of delivering quality on time for every project.
                    </p>

                    <div className="mt-4">
                        <p>Our emphasis on clear communication and follow through procedures ensures that client’s objectives are top priority in the planning and execution of all our processes. Our project management and execution philosophy is:</p>
                        <ul>
                            <li>Create detailed schedule and resources plan to meet project objectives.</li>
                            <li>Track project progress.</li>
                            <li>Supervise closely on the quality of work done.</li>
                            <li>Complete and commission the project on time.</li>
                        </ul>
                    </div>
                </div>
                <div className="container mt-4 position-relative chairman">
                    <div className="row">
                        {/* Left side: Chairman's Message */}
                        <div className="col-md-6">
                            <h2>CHAIRMAN'S MESSAGE</h2>
                            <h3>Mr. Kamlesh R. Patel, Founder & Chairman</h3>
                            <p>
                                The <strong>KJ Infrastructure</strong> has been in its core business of construction and property development. Founded in 2020 by Shri Kamleshbhai R Patel(USA), <strong>KJ Infrastructure</strong> has successfully executed a variety of challenging Building Construction, most of which are with our own structural design. This has helped us innovate and also prosper in the present-day competitive construction field.
                            </p>
                            <p>
                                With long-standing experience and proven expertise, <strong>KJ Infrastructure</strong> is ready to capitalize on this golden opportunity and enrich lives. By developing a better understanding of customer needs and putting customers’ interests first, we are coming up with innovative projects that set standards of excellence.
                            </p>
                            <p>
                                With a professional management team that is a blend of youth and experience, deep focus on quality, reliability, speed, and transparency, we are scaling great heights of excellence.
                            </p>
                        </div>

                        {/* Right side: Chairman's Image */}
                        <div className="col-md-6 my-element">
                            <img src={ChairmanImage} alt="Chairman" className="img-fluid border-radius-10" />
                        </div>

                    </div>

                </div>
                {/* SVG for the bottom wave */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    style={{ position: 'absolute', bottom: 0, left: 0, zIndex: -1, width: '100%' }}
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

        </>
    );
}

export default About;
