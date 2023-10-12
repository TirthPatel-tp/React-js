import React,{ useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import { useContext } from "react";

function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done,setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yjz8w2o', 'template_5t2e5cl', form.current, 'Dde1eLkGmmWfJY6aJ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };





  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>
                </div>
            </div>
        </div>

    <div className="c-right Contact">
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='user-name' className='user' placeholder='Name' />
            <input type='email' name='user-email' className='user' placeholder='Email' />
            <textarea name='message' className='user' placeholder='Message' />
            <input type='submit'  value='Send'  className='button'  />
            <span>{done && "Thanks for contact me!!!" }</span>

            <div className="blur c-blur1" style={{ background: "var(--purple)"}}></div>
        </form>
    </div>

    </div>
  )
}

export default Contact