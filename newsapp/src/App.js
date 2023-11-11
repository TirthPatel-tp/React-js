import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const pageSize =15;
  const apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = "3a7c8e8863034df09f5949f3fb9ab91c";

 

  const[progress, setProgress] = useState(0)


    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar 
        color='red'
        progress={progress}
        /> 
          <Routes>
            
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apiKey} key="general" country={'in'} pageSize={pageSize} category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apiKey} key="business" country={'in'} pageSize={pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apiKey} key="entertainment" country={'in'} pageSize={pageSize} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apikey={apiKey} key="general" country={'in'} pageSize={pageSize} category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apiKey} key="health" country={'in'} pageSize={pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apiKey} key="science" country={'in'} pageSize={pageSize} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apiKey} key="sports" country={'in'} pageSize={pageSize} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apiKey} key="technology" country={'in'} pageSize={pageSize} category="technology" />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;