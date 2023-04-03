import React from 'react';
import web from "../src/img/4.png";
import { NavLink } from "react-router-dom";
import Common from './Common';


function About() {
  return (
    <>
    <Common heading="Welcome to my About page" btntext="Contact Me" imgsrc={web} visit="/contact"/>
  </>
  );
}

export default About;