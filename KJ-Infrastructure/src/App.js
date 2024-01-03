import './App.css';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Intro/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
