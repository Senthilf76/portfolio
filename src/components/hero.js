import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import heroImg from '../assets/port.png'; // 👈 Your image

function Hero() {
  return (
    <section
      id="home"
      style={{
        padding: '80px 20px',
        backgroundColor: 'black',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        textAlign: 'center'
      }}
    >
      {/* Left Content */}
      <motion.div
        style={{ flex: '1 1 300px', maxWidth: '500px' }}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>
          Hi, I'm <span style={{ color: 'green' }}>Senthil Kumar</span>
        </h1>
        <h2 style={{ fontSize: '1.2rem', marginTop: '10px', color: 'white' }}>
          I’m a <span style={{ color: 'green', fontWeight: 'bold' }}>Software Developer</span>
        </h2>

        <h3 style={{ fontSize: '1.2rem', marginTop: '20px', color: 'white' }}>
          Expertise in{' '}
          <span style={{ color: 'green', fontWeight: '600' }}>
            <Typewriter
              words={[
                'Full Stack Development',
                'Python',
                'HTML/CSS',
                'JavaScript',
                'React.js',
                'MySQL'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>

        {/* Buttons */}
        <div
          style={{
            marginTop: '30px',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <a
            href="#contact"
            style={buttonPrimary}
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            style={buttonOutline}
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        style={{ flex: '1 1 250px', maxWidth: '300px' }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={heroImg}
          alt="Senthil Kumar"
          style={{
            width: '100%',
            borderRadius: '50%',
            border: '4px solid green',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.4)'
          }}
        />
      </motion.div>
    </section>
  );
}

const buttonPrimary = {
  padding: '10px 20px',
  backgroundColor: 'green',
  color: 'white',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
};

const buttonOutline = {
  padding: '10px 20px',
  border: '2px solid green',
  color: 'green',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
};

export default Hero;
