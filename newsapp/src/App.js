import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {  Routes, Route, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            
            <Route exact path="/" element={<News key="general" country={'in'} pageSize={6} category="general" />} />
            <Route exact path="/business" element={<News key="business" country={'in'} pageSize={6} category="business" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country={'in'} pageSize={6} category="entertainment" />} />
            <Route exact path="/general" element={<News key="general" country={'in'} pageSize={6} category="general" />} />
            <Route exact path="/health" element={<News key="health" country={'in'} pageSize={6} category="health" />} />
            <Route exact path="/science" element={<News key="science" country={'in'} pageSize={6} category="science" />} />
            <Route exact path="/sports" element={<News key="sports" country={'in'} pageSize={6} category="sports" />} />
            <Route exact path="/technology" element={<News key="technology" country={'in'} pageSize={6} category="technology" />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

