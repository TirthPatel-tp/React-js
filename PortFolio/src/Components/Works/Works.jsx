import React from 'react'
import './Works.css'
import Vodafone from "../../img/Vodafone.png"
import NIT from "../../img/NIT.png"
import ShreeHari from "../../img/ShreeHari.png"
import sevenEleven from "../../img/7-11.png"
import McDonalds from "../../img/McDonalds.png"
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';


function Works() {
    

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        {/* Left side  */}
        <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Works for all these</span>
                <span>Brands & Clients</span>
                <span>Here are some of the companies I've worked with:
                <ul>
                    <li>
                        <strong>Vodafone</strong> (Customer Service Representative)<br />
                        Provided excellent customer support, handled inquiries, and resolved issues in a professional manner.
                    </li>
                    <li>
                        <strong>Shree Hari Institute</strong> (Instructor)<br />
                        Taught students fundamental programming concepts, provided support, and graded assignments.
                    </li>
                    <li>
                        <strong>NIT Computer Training Center</strong> (Python Instructor)<br />
                        Conducted Python programming classes, assisted students, and evaluated their progress.
                    </li>
                </ul>
                </span>
                <Link spy={true} to='Contact' smooth={true}>

               <button className="button s-button">Hire me</button>
                </Link>
                <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
            </div>
            {/* Right side  */}
            <div className="w-right">
                <motion.div 
                initial={{ rotate: 45}}
                whileInView={{ rotate: 0}}
                viewport={{ margin: '-45px'}}
                transition = {{ duration:3.5, type: 'spring' }}

                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={NIT} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Vodafone} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={ShreeHari} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={McDonalds} alt=''/>
                    </div>
                    <div className="w-secCircle">
                        <img src={sevenEleven} alt=''/>
                    </div>
                </motion.div>
                    {/* Background Circles  */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
            </div>
    </div>
  )
}

export default Works