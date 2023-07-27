import React from 'react';
import { Link as AnLink, animateScroll as scroll } from 'react-scroll';
import me from '../images/medraw.png';
import headshot from '../images/newshot.jpg';
import '../css/general.css'

function Bio() {
  return (
    <section id='bio' className="relative">
          <div className="headshot" data-aos="zoom-out" data-aos-delay="500">
            <img src={headshot} alt="" />
          </div>
          <div className="biotext">
            <h1 className="h1 font-inter mb-6" data-aos="zoom-out" data-aos-delay="200" style={{lineHeight:'2.8vw'}} >
              Originally from <br/> <span data-aos="zoom-out" data-aos-delay="300" style={{color: '#627855', paddingLeft:'4vw'}}>Taipei, Taiwan</span>
            </h1>
            {/* <h2 className="dates" id='bdates'>'97</h2> */}
          </div>
          <a href="https://www.linkedin.com/in/vincent-yu-han-huang-34656914a" target='_blank' data-aos="zoom-out" data-aos-delay="400"><h1 id='mylinkedin'>LinkedIn</h1></a>
          <h1 id='email' data-aos="zoom-out" data-aos-delay="300">vincenthuang113@gmail.com</h1>
          <div className="northeastern">
            <h2 id='bachelor' style={{textAlign: 'start', lineHeight:'2.3vw'}} data-aos="zoom-out" data-aos-delay="600"> 
              Bachelor's at<br/> 
              <span style={{paddingLeft:'3vw'}} data-aos="zoom-out" data-aos-delay="700">
                Northeastern University
              </span>
            </h2>
            <h2 className="dates" id='neudates' data-aos="zoom-out" data-aos-delay="300">May'22</h2>
            <h2 id='majors' data-aos="zoom-out" data-aos-delay="800" style={{lineHeight:'2.4vw', fontStyle:'italic'}}>
              <span style={{fontWeight:'500', fontSize:'1.3vw'}}>Duo-majors:</span><br/>
              Economics<br/>
              Business
            </h2>
            <h3 id='concentration' data-aos="zoom-out" data-aos-delay="1000">Finance<br/>Entrepreneurship</h3>
          </div>
          <h2 className="dates" id='ctdates' data-aos="zoom-out" data-aos-delay="300">Mar'22</h2>

          <div className="hes">
            <h2 id='hes1' style={{textAlign: 'start', lineHeight:'2.3vw'}} data-aos="zoom-out" data-aos-delay="600"> 
              Harvard University,<br/> 
              <span style={{paddingLeft:'3vw'}} data-aos="zoom-out" data-aos-delay="700">
                Extension School
              </span><br/>
            </h2>
              
          </div>

          <div className="coursework">
              <h1 id='coursework123' data-aos="zoom-out" data-aos-delay="800">Coursework: Quantitative Finance/Economics,</h1><br/>
              <h1 id='coursework1' data-aos="zoom-out" data-aos-delay="800">Calculus 2, Discrete Mathematics</h1>
          </div>

          <h2 className="dates" id='hesdates' data-aos="zoom-out" data-aos-delay="300">May'23</h2>

          <div className="bootcamp" data-aos="zoom-out" data-aos-delay="700" style={{lineHeight:'2vw'}}>
            <h1 id='ct'>Coding Temple<br/><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingLeft:'2vw'}}>Full-Stack Coding Bootcamp</span></h1>
          </div>

          <div className="skills" data-aos="zoom-out" data-aos-delay="300">
            <h1><span>Coding Skills: </span>
              Python, JavaScript, TypeScript, HTML, CSS, Flask, React.js, SQL, SAS, R
            </h1>
            <h1><span>Computer Skills: </span>
              Microsoft Word, PowerPoint, Excel(VBA), Access, Bloomberg, Tableau<br/>
              <span id='sk'>Photoshop, Lightroom, Final Cut Pro, Premier Pro, After Effect, Motion<br/></span>
            </h1>
            <h1><span>Languages: </span>
              Fluent in English, Chinese, Taiwanese (IB Bilingual Diploma)<br/>
            </h1>
          </div>
          <h2 className="dates" id='upenndates' data-aos="zoom-out" data-aos-delay="300">TBD</h2>
          <h2 id='master' style={{textAlign: 'start', lineHeight:'2.3vw'}} data-aos="zoom-out" data-aos-delay="600"> 
              Master of Computer Science<br/> 
              <span style={{paddingLeft:'3vw', fontSize:'1.8vw'}} data-aos="zoom-out" data-aos-delay="700">
                University of Pennsylvania
              </span>
          </h2>

          {/* <div className="select">
            <h1 id='pleaseselect' data-aos="zoom-out" data-aos-delay="600">please select</h1>
            <h1 id='selectproject' data-aos="zoom-out" data-aos-delay="800">Projects</h1>
            <h1 id='selectwork' data-aos="zoom-out" data-aos-delay="800">Work</h1>
          </div> */}
          <div className="line" id='line1' data-aos="zoom-out" data-aos-delay="100"/>
          <div className="lineh" id='hlineheadshot' data-aos="fade-left" data-aos-delay="100"/>
          <div className="lineh" id='hlinebio' data-aos="fade-right" data-aos-delay="200"/>
          <div className="lineh" id='hlinebachelor' data-aos="fade-right" data-aos-delay="200"/>
          <div className="lineh" id='hlineMajor' data-aos="zoom-out" data-aos-delay="900"/>
          <div className="lineh" id='hlineMajor1' data-aos="zoom-out" data-aos-delay="900"/>

          <div className="lineh" id='hlinehes' data-aos="fade-right" data-aos-delay="200"/>


          <div className="lineh" id='hlinebootcamp' data-aos="fade-left" data-aos-delay="200"/>
          <div className="line" id='linebootcamp' data-aos="zoom-out" data-aos-delay="600"/>
          <div className="lineh" id='hlineskills' data-aos="zoom-out" data-aos-delay="600"/>
          <div className="line" id='line6' data-aos="zoom-out" data-aos-delay="400"/>
          <div className="line" id='lineMajor' data-aos="zoom-out" data-aos-delay="700"/>
          <div className="line" id='lineMajor1' data-aos="zoom-out" data-aos-delay="800"/>
          <div className="lineh" id='hlineselect' data-aos="zoom-out" data-aos-delay="500"/>
          <div className="line" id='line7' data-aos="zoom-out" data-aos-delay="600"/>
          <AnLink to="work" spy={true} smooth={true} offset={0} duration={500}>
            <h1 className="next" data-aos="zoom-out" data-aos-delay="500">▼</h1>
          </AnLink>
    </section>
  );
}

export default Bio;
