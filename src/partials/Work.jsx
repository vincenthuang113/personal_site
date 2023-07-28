import React from 'react';
import { Link as AnLink, animateScroll as scroll } from 'react-scroll';
import me from '../images/medraw.png';
import arrow1 from '../images/a.png'
import '../css/general.css'

function Work() {
  return (
    <section id='work' className="relative">
          <div className="worktitle">
            <h1 className="h1 font-inter mb-6" data-aos="zoom-out" data-aos-delay="200" style={{lineHeight:'2.8vw'}} >
              Work Experience
            </h1>
          </div>
          <div className="stick" data-aos="zoom-out" data-aos-delay="300" style={{lineHeight:'2vw'}}>
            <h1 id='stickinfo'>Sticket<br/><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingRight:'2.2vw'}}>Founder/CEO</span></h1>
            <h1><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingRight:'2.2vw'}}>Concert Ticket Brokerage</span></h1>
            <h2 className="dates" id='stickdate'>Feb'23-Present</h2>
          </div>
          <div className="seatscope" data-aos="zoom-out" data-aos-delay="300" style={{lineHeight:'2vw'}}>
            <h1 id='seatscopeinfo'>SeatScope<br/><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingLeft:'2.2vw'}}>PT Web Developer/Research</span></h1>
            <h2 className="dates" id='seatscopedate'>Aug'22-Present</h2>
          </div>
          <div className="ug" data-aos="zoom-out" data-aos-delay="300" style={{lineHeight:'2vw'}}>
            <h1 id='uginfo'>UG Investment<br/><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingRight:'2.2vw'}}>Junior Trader (Asian Hedge Fund)</span></h1>
            <h2 className="dates" id='ugdate'>Jan'21-Jun'21</h2>
          </div>
          <div className="marbo" data-aos="zoom-out" data-aos-delay="300" style={{lineHeight:'2vw'}}>
            <h1 id='marboinfo'>MARBO<br/>T.Rowe Price <br/> </h1>
            <h1 id='marboinfo2' style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingLeft:'2.2vw'}}>Research/Trade Consultant</h1>
            <h2 className="dates" id='marbodate'>Nov'20-Dec'20</h2>
          </div>
          <div className="military" data-aos="zoom-out" data-aos-delay="400">
            <h1 id='militaryinfo'>R.O.C Military Service<br/><span style={{fontWeight:'500', fontSize:'1.2vw', fontStyle:'italic'}}>May'20-Aug'20</span></h1>
          </div>
          <div className="hs" data-aos="zoom-out" data-aos-delay="400" style={{lineHeight:'2vw'}}>
            <h1 id='hsinfo'>Homesite Insurance<br/><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingRight:'2.2vw'}}>Actuarial Analyst</span></h1>
            <h2 className="dates" id='hsdate'>Jul'19-Dec'19</h2>
          </div>
          <div className="bz" data-aos="zoom-out" data-aos-delay="400" style={{lineHeight:'2vw'}}>
            <h1 id='bzinfo'>BluezenDrones<br/><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingLeft:'2.2vw'}}>Business Strategy Consultant</span></h1>
            <h2 className="dates" id='bzdate'>May'19-May'19</h2>
          </div>
          <div className="bbh" data-aos="zoom-out" data-aos-delay="400" style={{lineHeight:'2vw'}}>
            <h1 id='bbhinfo'>Brown Brothers Harriman<br/><span style={{fontWeight:'500', fontSize:'1.5vw', fontStyle:'italic', paddingRight:'2.2vw'}}>Income and Tax Specialist</span></h1>
            <h2 className="dates" id='bbhdate'>Jan'18-Jun'18</h2>
          </div>
          <img id='aa' src={arrow1} alt="" />
          <h1 id='clickme'>click me</h1>
          {/* <div className="line" id='line1' data-aos="zoom-out" data-aos-delay="100"/> */}
          <div className="line" id='line111' data-aos="zoom-out" data-aos-delay="100"/>
          <div className="lineh" id='hlinesticket' data-aos="fade-right" data-aos-delay="200"/>
          <div className="lineh" id='hlineseatscope' data-aos="fade-left" data-aos-delay="200"/>
          <div className="lineh" id='hlineug' data-aos="fade-right" data-aos-delay="200"/>
          <div className="lineh" id='hlinemarbo' data-aos="fade-left" data-aos-delay="200"/>
          <div className="lineh" id='hlinehomesite' data-aos="fade-right" data-aos-delay="200"/>
          <div className="lineh" id='hlinebz' data-aos="fade-left" data-aos-delay="200"/>
          <div className="lineh" id='hlinebbh' data-aos="fade-right" data-aos-delay="200"/>
          <div className="line" id='line8' data-aos="zoom-out" data-aos-delay="200"/>
          <div className="line" id='line9' data-aos="zoom-out" data-aos-delay="500"/>
          <AnLink to="projects" spy={true} smooth={true} offset={0} duration={500}>
            <h1 className="next" data-aos="zoom-out" data-aos-delay="500">▼</h1>
          </AnLink>
    </section>
  );
}

export default Work;
