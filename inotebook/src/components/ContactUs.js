// import React,{ useRef } from 'react'
// import emailjs from '@emailjs/browser';

// // import noteContext from '../context/notes/NoteContext'

// function ContactUs() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_yjz8w2o', 'template_5t2e5cl', form.current, 'Dde1eLkGmmWfJY6aJ')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div className='text-light'>
//       <section className="mb-4">
//         <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
//         <p className="text-center w-responsive mx-auto mb-5">
//           Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
//         </p>

//         <div className="row">
//           <div className="col-md-9 mb-md-0 mb-5">
//             <form ref={form} onSubmit={sendEmail} id="contact-form" name="contact-form" action="mail.php" method="POST">
//               {/* Your form fields go here */}

//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ContactUs;