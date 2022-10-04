import React from 'react';
import { useRef } from 'react';
import { Link as AnLink, animateScroll as scroll } from 'react-scroll';

import me from '../images/medraw.png';
import nulllogo from '../images/newlogo.png'
import nullsite1 from '../images/nullsite1.png'
import nullsite2 from '../images/nullsite2.png'
import seatsite from '../images/seatsite.png'
import arrow from '../images/left-arrow.png'
import arrow1 from '../images/a.png'
import kobe from '../images/kobe.png'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'
import '../css/general.css'
import '../css/project.css'

function Projects() {
  return (
    <section id='projects' className="relative">
          <div className="projecttitle">
            <h1 className="h1 font-inter mb-6" data-aos="zoom-out" data-aos-delay="200" style={{lineHeight:'2.8vw'}} >
              Projects
            </h1>
          </div>

          <div class="outer-wrapper" >
            <div className="wrapper">
              {/* -- NULL -- */}
              <div className="slide nulllogo" id='navNull'>
                  <img id='s1' src={s1} alt="" />
                  <div className="line" id='lineproject1' data-aos="zoom-out" data-aos-delay="200"/>
                  <div className="line" id='lineproject2' data-aos="zoom-out" data-aos-delay="600"/>
                  <div className="line" id='lineproject3' data-aos="zoom-out" data-aos-delay="600"/>
                  <div className="lineh" id='hlineproject' data-aos="fade-right" data-aos-delay="300"/>
                  <div className="lineh" id='hlineproject1' data-aos="fade-right" data-aos-delay="300"/>
                  <div className="lineh" id='hlineproject2' data-aos="fade-right" data-aos-delay="300"/>
                  <img src={nulllogo} alt=""  data-aos="zoom-out" data-aos-delay="300"/>
                  <h1 id='null' data-aos="zoom-out" data-aos-delay="300">NULL Investing</h1>
                  <h1 id='nulldesc' className='desc' data-aos="zoom-out" data-aos-delay="400">
                    I co-founded <span>NULL Investing</span> with a few friends who share the passion for trading. 
                    We recognize the lack of resources for Taiwanese investors, therefore decided to establish a community to build a hub of shared knowledge.
                  </h1>
                  <h1 id='nullservice' className='desc' data-aos="zoom-out" data-aos-delay="500">
                      NULL Investing provides a one-stop solution for investors primarily based in Taiwan. 
                    <br/>NULL Investing offers: 
                  </h1>
                  <h1 className='desc' id='bullets' data-aos="zoom-out" data-aos-delay="500">
                        <br/>• Podcasts and Livestreams 
                        <br/>• Educational materials
                        <br/>• In-house Trading Indicators
                        <br/>• Discord server community <br/>
                  </h1>
                  <h1 className='desc' id='nullbe' data-aos="zoom-out" data-aos-delay="600">
                    We firmly believe that our resources will one day make significant impact and contribution to the financial community.
                  </h1>
                  <div className="icons">
                  {/* fb */}
                    <a href="https://www.facebook.com/nullinvesting/" target='_blank'><svg id='fb' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="24px"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"/></svg></a>
                  {/* instagram */}
                  <a href="https://www.instagram.com/null_investing_llc/" target='_blank'><svg id='insta' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="24px"><path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path></svg></a>
                  {/* youtube */}
                  <a href="https://www.youtube.com/watch?v=CA2_1RQOxB8" target='_blank'><svg id='youtube' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="24px"><path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"></path></svg></a>
                  {/* discord */}
                  <a href="https://discord.com/invite/ScJdWjDNVw" target='_blank'><svg id='discord' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="24px"><path d="M 9.1367188 3.8691406 C 9.1217187 3.8691406 9.1067969 3.8700938 9.0917969 3.8710938 C 8.9647969 3.8810937 5.9534375 4.1403594 4.0234375 5.6933594 C 3.0154375 6.6253594 1 12.073203 1 16.783203 C 1 16.866203 1.0215 16.946531 1.0625 17.019531 C 2.4535 19.462531 6.2473281 20.102859 7.1113281 20.130859 L 7.1269531 20.130859 C 7.2799531 20.130859 7.4236719 20.057594 7.5136719 19.933594 L 8.3886719 18.732422 C 6.0296719 18.122422 4.8248594 17.086391 4.7558594 17.025391 C 4.5578594 16.850391 4.5378906 16.549563 4.7128906 16.351562 C 4.8068906 16.244563 4.9383125 16.189453 5.0703125 16.189453 C 5.1823125 16.189453 5.2957188 16.228594 5.3867188 16.308594 C 5.4157187 16.334594 7.6340469 18.216797 11.998047 18.216797 C 16.370047 18.216797 18.589328 16.325641 18.611328 16.306641 C 18.702328 16.227641 18.815734 16.189453 18.927734 16.189453 C 19.059734 16.189453 19.190156 16.243562 19.285156 16.351562 C 19.459156 16.549563 19.441141 16.851391 19.244141 17.025391 C 19.174141 17.087391 17.968375 18.120469 15.609375 18.730469 L 16.484375 19.933594 C 16.574375 20.057594 16.718094 20.130859 16.871094 20.130859 L 16.886719 20.130859 C 17.751719 20.103859 21.5465 19.463531 22.9375 17.019531 C 22.9785 16.947531 23 16.866203 23 16.783203 C 23 12.073203 20.984172 6.624875 19.951172 5.671875 C 18.047172 4.140875 15.036203 3.8820937 14.908203 3.8710938 C 14.895203 3.8700938 14.880188 3.8691406 14.867188 3.8691406 C 14.681188 3.8691406 14.510594 3.9793906 14.433594 4.1503906 C 14.427594 4.1623906 14.362062 4.3138281 14.289062 4.5488281 C 15.548063 4.7608281 17.094141 5.1895937 18.494141 6.0585938 C 18.718141 6.1975938 18.787437 6.4917969 18.648438 6.7167969 C 18.558438 6.8627969 18.402188 6.9433594 18.242188 6.9433594 C 18.156188 6.9433594 18.069234 6.9200937 17.990234 6.8710938 C 15.584234 5.3800938 12.578 5.3046875 12 5.3046875 C 11.422 5.3046875 8.4157187 5.3810469 6.0117188 6.8730469 C 5.9327188 6.9210469 5.8457656 6.9433594 5.7597656 6.9433594 C 5.5997656 6.9433594 5.4425625 6.86475 5.3515625 6.71875 C 5.2115625 6.49375 5.2818594 6.1985938 5.5058594 6.0585938 C 6.9058594 5.1905937 8.4528906 4.7627812 9.7128906 4.5507812 C 9.6388906 4.3147813 9.5714062 4.1643437 9.5664062 4.1523438 C 9.4894063 3.9813438 9.3217188 3.8691406 9.1367188 3.8691406 z M 12 7.3046875 C 12.296 7.3046875 14.950594 7.3403125 16.933594 8.5703125 C 17.326594 8.8143125 17.777234 8.9453125 18.240234 8.9453125 C 18.633234 8.9453125 19.010656 8.8555 19.347656 8.6875 C 19.964656 10.2405 20.690828 12.686219 20.923828 15.199219 C 20.883828 15.143219 20.840922 15.089109 20.794922 15.037109 C 20.324922 14.498109 19.644687 14.191406 18.929688 14.191406 C 18.332687 14.191406 17.754078 14.405437 17.330078 14.773438 C 17.257078 14.832437 15.505 16.21875 12 16.21875 C 8.496 16.21875 6.7450313 14.834687 6.7070312 14.804688 C 6.2540312 14.407687 5.6742656 14.189453 5.0722656 14.189453 C 4.3612656 14.189453 3.6838438 14.494391 3.2148438 15.025391 C 3.1658438 15.080391 3.1201719 15.138266 3.0761719 15.197266 C 3.3091719 12.686266 4.0344375 10.235594 4.6484375 8.6835938 C 4.9864375 8.8525938 5.3657656 8.9433594 5.7597656 8.9433594 C 6.2217656 8.9433594 6.6724531 8.8143125 7.0644531 8.5703125 C 9.0494531 7.3393125 11.704 7.3046875 12 7.3046875 z M 8.890625 10.044922 C 7.966625 10.044922 7.2167969 10.901031 7.2167969 11.957031 C 7.2167969 13.013031 7.965625 13.869141 8.890625 13.869141 C 9.815625 13.869141 10.564453 13.013031 10.564453 11.957031 C 10.564453 10.900031 9.815625 10.044922 8.890625 10.044922 z M 15.109375 10.044922 C 14.185375 10.044922 13.435547 10.901031 13.435547 11.957031 C 13.435547 13.013031 14.184375 13.869141 15.109375 13.869141 C 16.034375 13.869141 16.783203 13.013031 16.783203 11.957031 C 16.783203 10.900031 16.033375 10.044922 15.109375 10.044922 z"></path></svg></a>
                  {/* spotify */}
                  <a href="https://open.spotify.com/show/4j0utyhFkC4o78HJcGwuj9" target='_blank'><svg id='spotify' fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="35px" height="24px"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 10.689453 8 C 9.1494531 8 7.696125 8.171625 6.328125 8.515625 C 5.986125 8.600625 5.7285156 8.8561406 5.7285156 9.3691406 C 5.7285156 9.8821406 6.0709844 10.310609 6.5839844 10.224609 C 6.8399844 10.224609 6.9266562 10.138672 7.0976562 10.138672 C 8.2096562 9.8816719 9.4924531 9.7109375 10.689453 9.7109375 C 13.084453 9.7109375 15.564391 10.309 17.275391 11.25 C 17.531391 11.335 17.616109 11.421875 17.787109 11.421875 C 18.301109 11.421875 18.643516 11.079406 18.728516 10.566406 C 18.728516 10.139406 18.473797 9.8819375 18.216797 9.7109375 C 16.078797 8.5989375 13.340453 8 10.689453 8 z M 10.519531 10.994141 C 9.0655312 10.994141 8.0396719 11.250813 7.0136719 11.507812 C 6.5856719 11.678813 6.4140625 11.849344 6.4140625 12.277344 C 6.4140625 12.619344 6.6696563 12.960938 7.0976562 12.960938 C 7.2686562 12.960937 7.3543906 12.961 7.5253906 12.875 C 8.2953906 12.704 9.3215937 12.533203 10.433594 12.533203 C 12.656594 12.533203 14.710062 13.045328 16.164062 13.986328 C 16.335063 14.071328 16.506734 14.158203 16.677734 14.158203 C 17.104734 14.158203 17.360266 13.815672 17.447266 13.388672 C 17.447266 13.132672 17.276531 12.876078 17.019531 12.705078 C 15.137531 11.593078 12.914531 10.994141 10.519531 10.994141 z M 10.775391 14.007812 C 9.5783906 14.007812 8.4655156 14.178547 7.3535156 14.435547 C 7.0115156 14.435547 6.8417969 14.691203 6.8417969 15.033203 C 6.8417969 15.375203 7.0974531 15.632812 7.4394531 15.632812 C 7.5254531 15.632812 7.6961875 15.546875 7.8671875 15.546875 C 8.7221875 15.375875 9.7484531 15.205078 10.689453 15.205078 C 12.399453 15.205078 14.025594 15.632344 15.308594 16.402344 C 15.479594 16.487344 15.565328 16.572266 15.736328 16.572266 C 15.992328 16.572266 16.248922 16.402609 16.419922 15.974609 C 16.419922 15.632609 16.249125 15.546 16.078125 15.375 C 14.538125 14.52 12.742391 14.007812 10.775391 14.007812 z"></path></svg></a>
                </div>
              </div>
              
              {/* --websites-- */}
              <div className="slide websites" id='navWeb'>
                
                <div className="lineh" id='hlinewebsite' data-aos="fade-right" data-aos-delay="400"/>
                <div className="lineh" id='hlinewebsite1' data-aos="fade-right" data-aos-delay="300"/>
                <div className="line" id='linewebsite' data-aos="zoom-out" data-aos-delay="100"/>
                <a href="https://www.nullinvesting.com" target="_blank"><h1 className='nullw' data-aos="zoom-out" data-aos-delay="300">The Official Website</h1></a>
                <h2>↑ One-pager created with React.js, HTML, CSS </h2>
                <ul class="slides">
                  <input type="radio" name="radio-buttons" id="img-1" checked />
                  <li class="slide-container">
                    <div class="slide-image">
                      <img src={nullsite1}/>
                    </div>
                  </li>
                  <input type="radio" name="radio-buttons" id="img-2" />
                  <li class="slide-container">
                    <div class="slide-image">
                      <img src={nullsite2}/>
                    </div>
                  </li>

                  <div class="carousel-dots">
                    <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
                    <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
                  </div>
                </ul>
                <img id='s1-1' src={s1} alt="" />
                <div className="hostedsite">
                  <h1>Hosted <br/>Websites</h1>
                  <img id='righta' src={arrow} alt="" />
                  <img id='a' src={arrow1} alt="" />
                </div>
              </div>
              <div className="slide seatscopesite">
                <div className="line" id='lineseat' data-aos="fade-right" data-aos-delay="200"/>
                <div className="line" id='lineseat1' data-aos="fade-right" data-aos-delay="200"/>
                <div className="lineh" id='hlineseat' data-aos="fade-right" data-aos-delay="200"/>
                <div className="lineh" id='hlineseat1' data-aos="fade-right" data-aos-delay="200"/>
                <div class="seatimage">
                      <img src={seatsite}/>
                </div>
                <a href="https://www.seatscopellc.com" target="_blank"><h1 className='nullw' id='seatsitetitle'>SeatScope</h1></a>
                <h2>↑ Created with HTML, CSS, JavaScript </h2>
                <h2 id='seatd'>The official site of SeatScope LLC </h2>
                <h1 className="local">Local Projects</h1>
                <h1 className="nullw" id='stonks'>STONKS</h1>
                <h2 id='stonksd'>
                  Portfolio Tracker built with Python Flask (back-end),<br/>
                  React TypeScript (front-end), REST API (data storage),<br/>
                  Authentication (Sign In/Up), Market Sentiment Forecast
                </h2>
                <h1 className="nullw" id='weather'>Weather NOW</h1>
                <h2 id='weatherd'>
                  A web app (HTML, CSS, JS) that returns real-time<br/>
                  weather and images API data based on location input
                </h2>
                <h1 className="nullw" id='etse'>Hack For Good</h1>
                <h2 id='etsed'>
                  JP Morgan Chase & Co. (August 2022) <br/> Emerging Talent Full Day Hackathon
                </h2>
                <div className="myillustration">
                  <h1>My Illustrations</h1>
                  <img id='lefta' src={arrow} alt="" />
                </div>
                <img id='s3' src={s3} alt="" />
                <img id='s2' src={s2} alt="" />
              </div>

              {/* illustration */}
              <div className="slide illustration" id='navIll'>
                <div className="lineh" id='hlineill' data-aos="fade-right" data-aos-delay="200"/>
                <div className="line" id='lineill' data-aos="fade-right" data-aos-delay="200"/>
                <div class="carousel-wrapper">
                  <div class="carousel-container">
                    <div class="carousel">
                      <div class="image-one"></div>
                      <div class="image-two"></div>
                      <div class="image-three"></div>
                      <div class="image-four"></div>
                    </div>
                  </div>
                </div>
              </div>


              {/* videography */}
              <div className="video">
                  <div className="lineh" id='hlinevid' data-aos="fade-right" data-aos-delay="200"/>
                  <ul class="slides1">
                    <input type="radio" name="radio-buttons1" id="vid-1" checked />
                    <li class="slide-container1" id='vidc'>
                      <div class="slide-image1">
                        <iframe width="800vw" height="450vw"src="https://www.youtube.com/embed/hkTC7EOzgn4?&start=2&vq=hd1080&loop=1&mute=1&showinfo=0&controls=0"data-aos="zoom-out"></iframe>
                      </div>
                    </li>
                    <input type="radio" name="radio-buttons1" id="vid-2" />
                    <li class="slide-container1">
                      <div class="slide-image1">
                        <iframe width="800vw" height="450vw"src="https://www.youtube.com/embed/CA2_1RQOxB8?fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=2&vq=hd1080&autoplay=1&loop=1&playlist=CA2_1RQOxB8&mute=1&showinfo=0&controls=0"data-aos="zoom-out"></iframe>
                      </div>
                    </li>

                    <div class="carousel-dots1">
                      <label for="vid-1" class="carousel-dot1" id="vid-dot-1"></label>
                      <label for="vid-2" class="carousel-dot1" id="vid-dot-2"></label>
                    </div>
                    <h1 className="local" id='vidtitle'>Videography</h1>
                    <h1 className="nullw" id='vid'>Short Film</h1>
                    <h2 id='vidd'>
                      <span>National Award - 3rd Place <br/></span>
                      Summary: A young man aspired <br/>
                      to be a successful soldier.
                    </h2>
                    <h1 className="nullw" id='vid1'>Promotional Video</h1>
                    <h2 id='vidd1'>
                      NULL Investing's promotional video
                    </h2>
                    <img id='s4' src={s1} alt="" />
                  </ul>
                
              </div>

            </div>
          </div>
          <div className="line" id='lineproject' data-aos="zoom-out" data-aos-delay="100"/>
          
          
          {/* <div className="line" id='line3' data-aos="zoom-out" data-aos-delay="900"/> */}
    </section>
  );
}

export default Projects;
