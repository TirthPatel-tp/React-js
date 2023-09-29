import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState(`light`); //whether darkk mode is enable or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);

  }

  // function removeBodyClasses() {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  // }

  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#111212';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success")
    }

  }
  return (
    <>
      <BrowserRouter>
        <Navbar Title="TextUtils" mode={mode} aboutText="About TextUtils" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route 
             path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils - Word Counter | Character Counter"
                  mode={mode}
                />
              }
            />
          </Routes> 
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;



