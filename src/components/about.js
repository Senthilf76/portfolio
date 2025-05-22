// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/img2.jpg';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{ padding: '2rem 1rem' }}
    >
      <div
        className="about-content"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Profile Picture */}
        <img
          src={profilePic}
          alt="Senthil Kumar"
          className="profile-pic"
          style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid green',
            boxShadow: '2px 4px 12px rgba(5, 59, 37, 0.2)',
          
          }}
        />

        {/* Right: Content */}
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold',color:'white'  }}>About Me</h2>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            I'm a{' '}
            <span style={{ color: 'green', fontWeight: 'bold' }}>
              <Typewriter
                words={['Developer', 'Designer', 'Creator']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Aspiring software developer with hands-on experience in Python full-stack development.
            Proficient in building responsive, scalable web applications and passionate about solving
            real-world problems through clean, efficient code. Eager to contribute to a dynamic development team.
          </p>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem',color:'white' }}>
            Education-{' '}
            <span style={{ color: 'green', fontWeight: 'bold' }}>
              <Typewriter
                words={['Bachlore Degree in', 'Computer Science And Engineering', 'Anna University','2024 passedout']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h4>

        </div>
      </div>
      
    </motion.section>
  );
};

export default About;

