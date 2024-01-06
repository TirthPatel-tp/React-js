import React from 'react'
import crane from '../../Img/crane.jpg'
import './Project.css'

function Project() {
    return (
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6 img-container my-element">
                    {/* eslint-disable-next-line */}
                    <img src={crane} alt="Project image" class="img-fluid project-img" />
                </div>
                <div class="col-md-6 project-details">
                    <h1>Bopal Site</h1>
                    <p className='mt-5'>HE SAGE BY REPOSE</p>
                    <p>INVEST. LIVE. REPEAT.</p>
                    <p>MINDFUL LIVING EXPERIENCE @Bopal</p>
                    <p>OPENING UP AVENUES FOR THOSE LOOKING TO INVEST AND LIVE AMONGST A WELLNESS-CENTRIC COMMUNITY.</p>
                    <p>COURTYARD VILLAS – XXX SQ.YDS. PLOTS CAMPUS WITH 20 YEAR OLD TREES THOUGHTFULLY – DESIGNED STREET-SCAPE WELLNESS INFRASTRUCTURE Plot Area: XXX Sq.Yds.</p>
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className='design'
                style={{ position: 'absolute', left: 0, zIndex: -1, width: '100%' }}
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
    )
}

export default Project