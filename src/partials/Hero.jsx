import React from 'react';
import { Link as AnLink, animateScroll as scroll } from 'react-scroll';
import Illustration from '../images/hero-illustration.svg';
import me from '../images/medraw.png';

import '../css/general.css'
import '../css/rotate.css'

function Hero() {

  return (
    <section id='hero' className="relative">
          <div className="medraw">
            <h1 className="h1 font-inter mb-6" id='name' data-aos="zoom-out" data-aos-delay="100">
              <span id='hey'>Hey there,</span><br/> This is <div className="slidingVertical">
              <span className="font-italic">  Vincent.<br/>
               Vince.<br/>
               Vintle. <br/>
               Yu-Han.</span>
              </div>
            </h1>
            <img id='face' src={me}  height="auto" data-aos="zoom-out" data-aos-delay="200"/>
            
          </div>
          <div className="line" data-aos="zoom-out" data-aos-delay="300"></div>
          <AnLink to="asp" spy={true} smooth={true} offset={0} duration={500}>
            <h1 className="next" data-aos="zoom-out" data-aos-delay="500">▼</h1>
          </AnLink>
    </section>
  );
}

export default Hero;
