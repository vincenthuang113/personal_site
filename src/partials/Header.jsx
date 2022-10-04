import React from 'react';
import { Link as AnLink} from 'react-scroll';

import vh from '../images/vh.png';
import '../css/header.css';

function Header() {
  return (
    <header className="relative w-full z-30" id='nav'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}

          <img id='vh' src={vh} alt="" />
          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <AnLink className="font-medium px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" 
                      to="hero" activeClass='active'
                      spy={true} smooth={true} offset={50} duration={500}>Home</AnLink>
              </li>
              <li>
                <AnLink className="font-medium px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" 
                      to="asp" activeClass='active'
                      spy={true} smooth={true} offset={50} duration={500}>Aspiration</AnLink>
              </li>
              <li>
                <AnLink className="font-medium px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" 
                      to="bio" activeClass='active'
                      spy={true} smooth={true} offset={50} duration={500}>About Me</AnLink>
              </li>
              <li>
                <AnLink className="font-medium px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" 
                      to="work" activeClass='active'
                      spy={true} smooth={true} offset={50} duration={500}>Work Experience</AnLink>
              </li>
              <li>
                <AnLink className="font-medium px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" 
                      to="projects" activeClass='active'
                      spy={true} smooth={true} offset={50} duration={500}>Projects</AnLink>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
