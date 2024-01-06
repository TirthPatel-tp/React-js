import { useEffect, useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Services from './Components/Services/Services';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactForm from './Components/ContactUs/ContactUs';


function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const elements = document.querySelectorAll('.my-element'); 

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar openContactModal={openModal}/>
        <ContactForm isModalOpen={isModalOpen} closeModal={closeModal} />
        <Routes>

          <Route exact path='/' element={<><Intro />, <Services /></>}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/project' element={<Project />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
