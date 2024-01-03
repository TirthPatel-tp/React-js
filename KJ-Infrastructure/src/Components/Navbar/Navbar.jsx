import React from 'react'
import Logo from "../../Img/logo.png"

function Navbar() {
    return (
        <nav className="navbar sticky-top border-bottom border-dark navbar-expand-lg  navbar-light bg-light shadow-lg  p-3 mb-5 bg-white" style={{height: '100px'}}>
            <div className="container">
                <a href="/" className="navbar-brand">

                    <img src={Logo} width="45" alt="" className="d-inline-block align-middle mr-2" />

                    <span className="text-uppercase font-weight-bold">KJ-Infrastructure</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto font-weight-bold">
                        <li className="nav-item active"><a href="/" className="nav-link">Home <span className="sr-only">(current)</span></a></li>
                        <li className="nav-item"><a href="/" className="nav-link">About Us</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="/" className="nav-link">Contact Us</a></li>
                    </ul>
                </div>

            </div>
        </nav>



    )
}

export default Navbar