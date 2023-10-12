import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import GitHub from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="Footer wave"  style={{width: '100%'}}/>
        <div className="f-content">
           <span>tirthpatel2617@gmail.com</span> 
           <div className="f-icons">
            <a href='https://www.instagram.com/tk_patel_2601/'>

            <Insta color='white' size='3rem' />
            </a>
            <Linkedin color='white' size='3rem' />
            <GitHub color='white' size='3rem' />
           </div>
        </div>
    </div>
  )
}

export default Footer