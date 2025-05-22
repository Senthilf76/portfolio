import React from 'react';
import Navbar from './components/Navbar';
import About from './components/about';
import Project from './components/project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import smoothscroll from 'smoothscroll-polyfill';
import Footer from './components/footer';
import Hero from './components/hero'; 
smoothscroll.polyfill();

function App() {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project/>
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
