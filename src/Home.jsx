import React from 'react';
import web from "../src/img/2.png";
import { NavLink } from "react-router-dom";
import Common from './Common';


function Home() {
  return (
    <>
   <Common heading="Grow your business with" btntext="Get Started" imgsrc={web} visit="/services"/>
  </>
  );
}

export default Home;