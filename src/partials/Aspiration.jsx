import React from 'react';
import {Link as AnLink} from 'react-scroll';
import me from '../images/medraw.png';

import '../css/general.css'

function Aspiration() {
  return (
    <section id='asp' className="relative">
          <div className="asptext">
            <h1 className="h1 font-inter mb-6" data-aos="zoom-out" data-aos-delay="200">
              I <span style={{color:'#BCBC9F'}}>aspire</span> to be<br/> a<div className="slidingVertical asp">
              <span id='leftpls' style={{color: '#627855', textAlign:'start'}} className="font-italic">  Creative<br/>
               Quant<br/>
               Trader<br/>
               Developer<br/></span>
              </div>
            </h1>
          </div>
          <div className="longprocess">
            <h2 id='process' data-aos="zoom-out" data-aos-delay="300"> it's a long process.. <br/> <span data-aos="zoom-out" data-aos-delay="700">but i'm working real hard on it</span></h2>
          </div>
          <div className="line" id='line1' data-aos="zoom-out" data-aos-delay="100"/>
          <div className="line" id='line2' data-aos="zoom-out" data-aos-delay="300"/>
          <div className="line" id='line3' data-aos="zoom-out" data-aos-delay="00"/>
          <AnLink to="bio" spy={true} smooth={true} offset={0} duration={500}>
            <h1 className="next" data-aos="zoom-out" data-aos-delay="500">▼</h1>
          </AnLink>
    </section>
  );
}

export default Aspiration;
