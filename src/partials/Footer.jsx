import React from 'react';
import { Link } from 'react-router-dom';

import '../css/general.css';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
