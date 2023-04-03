import React from 'react';
import web from "../src/img/2.png";
import { NavLink } from "react-router-dom";


function Common(props) {
  return (
    <>
    <section id="header" className='d-flex align-items-center justify-content-center'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1> {props.heading} <strong className='brand-name'>Web Developer</strong> </h1>
            <h2 className='my-3'>We are the team of talented developer making websites</h2>
            <div className="mt-3">
                <NavLink to={props.visit} className='btn-get-started'>{props.btntext}</NavLink>
            </div>
            </div>

            <div className='col-lg-6 order-1 order-lg-2 header-img'>
            <img src={props.imgsrc} className='img-fluid animated' alt="About-img" />
            </div>
            </div>
    </div>
        </div>
        </div>

    </section>
  </>
  );
}

export default Common;