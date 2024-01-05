import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<><Intro />, <Services /></>}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
