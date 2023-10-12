import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
// import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'
import {Link} from 'react-scroll';


function Intro() {

  const transition = { duration:2, type: 'spring' }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hey! I Am</span>
          <span>Tirth Patel</span>
          <span>I'm a dedicated and adaptable college student pursuing an Advanced Diploma in Computer Programming and Analysis (CPA) at Seneca College in Toronto, ON. With a strong foundation in data analytics, project management, and report preparation, I bring expertise as a skilled programmer and problem-solver. My passion lies in delivering high-quality code, providing valuable technical support, and applying exceptional interpersonal skills to contribute to team success. I'm highly motivated, customer-focused, and enthusiastic about taking on new challenges in a collaborative and innovative environment.</span>
        
          <span>As a web developer, I have knowledge in React, HTML, JavaScript, CSS, and Node.js. I've also completed numerous projects, both during my studies and on a personal level, showcasing my skills and commitment to the field.</span>
        </div>
        <Link spy={true} to='Contact' smooth={true}>

        <button className="button i-button" >Hire me</button>
        </Link>
        <div className="i-icons">
          {/* Have to add links in it */}
          <a href='https://github.com/TirthPatel-tp'>
            <img src={Github} alt=' Link to my GitHub account' />
          </a>
          <a href='https://www.linkedin.com/in/tirth-patel-tk/'>
            <img src={LinkedIn} alt='Visit my LinkedIn' />
          </a>
          {/* <a href='https://www.instagram.com/tk_patel_2601/'>
            <img src={Instagram} alt=' Visit My Instagram account' />
          </a> */}


        </div>
      </div>
      <div className="i-right ">
        <img src={Vector1} alt='blue background' />
        <img src={Vector2} alt='Yellow background' />
        {/* Change photos */}
        <img src={boy} alt='my pic' />

        {/* TO add animation on emoji  */}

        <motion.img 
        initial={{left: '-35%'}}
        whileInView={{left: '-24%'}}
        transition={transition}
        src={glassesimoji} alt='glassemoji' />

        <motion.div 
         initial={{top: '-4%', left: '74%'}}
         whileInView={{left: '68%'}}
         transition={transition}
        
        style={{ top: '-4%', left: '68%' }}
        className='floating-div'
        >
          <FloatingDiv image={Crown} txt1='Web' txt2='developer' />
        </motion.div>

        <motion.div 
         initial={{left: '9rem', top: '18rem'}}
         whileInView={{left: '0rem'}}
         transition={transition}

        style={{ top: '18rem', left: '0rem' }} className='floating-div'>
          <FloatingDiv image={thumbup} txt1='Data' txt2='Analyst' />
        </motion.div>
        {/* blur Div  */}
        <div className="blur" style={{ background: "rgb(238 210 255" }}>    </div>
        <div className="blur" style={{ background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}>    </div>

      </div>
    </div>
  )
}

export default Intro