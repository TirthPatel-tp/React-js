import React from 'react';
import City from '../../Img/city-view.png';
import './Intro.css'; // Import the CSS file

function Intro() {
  return (
    <div className="intro-container">
      <div className="text-center">
        <div className="row">
          {/* Left side: Text */}
          <div className="col-md-6 left-column">
            <h2>Introducing </h2>
            <h1> KJ Infrastructure</h1>
            <button type="button" className="btn btn-secondary  btn-lg">Buy Services</button>
            <button type="button" className="btn btn-secondary  btn-lg">Contact Us</button>
          </div>

          {/* Right side: Big image */}
          <div className="col-md-6">
          {/* eslint-disable-next-line */}
            <img
              src={City}
              alt="Big Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="box-sizing mt-5">
        <div className="row">
          {/* Left side: Text */}
          <div className="main-content">
            <h1><strong>Welcome to KJ Infrastructure</strong></h1>
            <p>
              The <strong>KJ Infrastructure</strong> has been in its core business of construction and property development.
              KJ Infrastructure has successfully executed a variety of challenging Building Construction,
              most of which are with our own structural design. This has helped us innovate and also prosper
              in the present-day competitive construction field.
            </p>
            <p>
              <strong>KJ Infrastructure</strong> is committed to enhancing the Building construction industry in Gujarat by providing
              the highest quality products and services, keep adopting proven new technologies and approaches to deliver
              superior solutions.
            </p>
            <p>
              <strong>KJ Infrastructure</strong> has a good team of engineers & surveyors for planning, designing, Execution construction,
              managing of maintenance, and a powerful team of supervisors. The company consists of dynamic management in
              administration, accounting at office and field level. We also have a unique team for quality control, safety,
              and desert management.
            </p>
            <p>
              The <strong>KJ Infrastructure</strong> has successfully completed numerous <strong>Residential, Industrial,</strong> and <strong>Commercial projects</strong>
              within Gujarat. It has a proven track record of delivering quality on time, for every project.
            </p>
            <p><strong>Email Us: </strong><a href="mailto:info@kjinfrastructure.com">info@kjinfrastructure.com</a></p>
            <p><strong>Contact Us: </strong><a href="tel:9904449523">9904449523</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
