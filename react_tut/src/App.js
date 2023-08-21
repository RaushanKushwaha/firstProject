
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import React, {useEffect,useState} from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
   
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
        
      
    </div>
    </BrowserRouter>
  );

}

export default App;
