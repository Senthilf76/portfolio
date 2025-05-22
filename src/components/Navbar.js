import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">My Portfolio</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'rotate1' : ''}`}></div>
        <div className={`line ${isOpen ? 'fade' : ''}`}></div>
        <div className={`line ${isOpen ? 'rotate2' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
