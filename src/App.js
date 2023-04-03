import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App =()=> {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" Component={Home}/>
    <Route  path="/about" Component={About}/>
    <Route  path="/services" Component={Services}/>
    <Route  path="/contact" Component={Contact}/>
    <Route path="*" Component={Home}/>
    </Routes>

    {/* <Footer/> */}
    </>
  );
}

export default App;
