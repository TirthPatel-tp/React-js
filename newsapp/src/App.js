import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize =15;
  apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = "3a7c8e8863034df09f5949f3fb9ab91c";

  state ={
    progress:0
  }

  setProgress =(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <LoadingBar 
        color='red'
        progress={this.state.progress}
        /> 
          <Routes>
            
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="general" country={'in'} pageSize={this.pageSize} category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="business" country={'in'} pageSize={this.pageSize} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="entertainment" country={'in'} pageSize={this.pageSize} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="general" country={'in'} pageSize={this.pageSize} category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="health" country={'in'} pageSize={this.pageSize} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="science" country={'in'} pageSize={this.pageSize} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="sports" country={'in'} pageSize={this.pageSize} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apiKey} key="technology" country={'in'} pageSize={this.pageSize} category="technology" />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

