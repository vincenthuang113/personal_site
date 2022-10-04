import React from 'react';

import Aspiration from '../partials/Aspiration';
import Bio from '../partials/Bio';
import Header from '../partials/Header';
import Hero from '../partials/Hero';
import Footer from '../partials/Footer';
import Work from '../partials/Work';
import Projects from '../partials/Projects';
import '../css/header.css';

function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <Hero />
        <Aspiration />
        <Bio />
        <Work />
        <Projects />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;