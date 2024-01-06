import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import Logo from '../../Img/logo.png';
import emailjs from "@emailjs/browser";

import './ContactUs.css'; 

const ContactForm = ({ isModalOpen, closeModal }) => {
  console.log('isModalOpen:', isModalOpen);
  const form = useRef();
  const [done, setDone] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yjz8w2o', 'template_718zmrm', form.current, 'Dde1eLkGmmWfJY6aJ'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form Modal"
        className="modal-dialog modal-dialog-centered"
        style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <img src={Logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
            <h5 className="modal-title">We Realize your Dream</h5>
            <i type="button" className="fa-solid fa-xmark cursor-pointer" onClick={closeModal}></i>
          </div>
          <div className="modal-body">
            <form ref={form} onSubmit={handleSubmit} id="contact-form" name="contact-form" action="mail.php" method="POST">
              <h4 className='text-center'>Contact us</h4>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input type="text" id="name" name="user-name" placeholder="Name" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input type="text" id="email" name="user-email" placeholder="Email" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input type="text" id="subject" placeholder='Title' name="user-subject" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="2"
                  className="form-control"
                ></textarea>
              </div>
              <div className="text-center">
                <input type="submit" value="Send" className="btn btn-primary" />
              </div>
              <span className='thanks'>{done && "Thanks for Contacting me"}</span>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
