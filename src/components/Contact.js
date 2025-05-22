import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaArrowUp
} from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_v2j9mgn',
      'template_uwu8hrc',
      formRef.current,
      'rPBPVGJ7Z8S10PodG'
    ).then(() => {
      setSubmitted(true);
      formRef.current.reset();
    }).catch((error) => {
      alert("Failed to send message: " + error.text);
    });
  };

  const handleScroll = () => setShowScroll(window.scrollY > 300);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: '60px 20px',
        background: 'linear-gradient(to right,rgb(0, 6, 7),black)',
        position: 'relative',
      }}
    >
      <div style={containerStyle}>
        {/* Left: Info */}
        <div style={infoLeft}>
          <h1 style={{color:'white'}}>Contact Me</h1>
          <p style={{ marginTop: '10px', marginBottom: '30px',color:'white' }}>
            Here Is My Contact Details Feel Free To Contact Me
          </p>
          <p style={infoItem}><FaEnvelope /> senthilsteave@gmail.com</p>
          <p style={infoItem}><FaPhoneAlt /> +91-6380897994</p>
          <div style={socialStyle}>
            <a href="https://github.com/Senthilf76" target="_blank" rel="noopener noreferrer" style={socialIcon}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/senthil-kumar-10b3792bb" target="_blank" rel="noopener noreferrer" style={socialIcon}>
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div style={formContainer}>
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: 'green', marginBottom: '20px' }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
          <form ref={formRef} onSubmit={sendEmail} style={formStyle}>
            <div style={inputWrapper}>
              <FaUser style={iconStyle} />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                style={inputWithIcon}
              />
            </div>

            <div style={inputWrapper}>
              <FaEnvelope style={iconStyle} />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                style={inputWithIcon}
              />
            </div>

            <div style={inputWrapper}>
              <FaCommentDots style={iconStyle} />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                style={{ ...inputWithIcon, resize: 'none', paddingTop: '12px' }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1d4ed8' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={buttonStyle}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>

      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          style={scrollButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </motion.section>
  );
};

// Layout styles
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '40px',
  padding: '20px 0',
};

const infoLeft = {
  flex: '1 1 300px',
  textAlign: 'left 200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontSize: '16px',
  color: '#333',
};

const formContainer = {
  flex: '1 1 350px',
  maxWidth: '500px',
};

// Form styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  position:'absolute',
  right:'200px',
  gap: '15px',
  width: '30%',
};

const inputWrapper = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'grey',
  color:'white',
  borderRadius: '8px',
  border: '2px solid #ccc',
  padding: '0 10px',
};

const iconStyle = {
  color: 'green',
  fontSize: '18px',
  marginRight: '8px',
};

const inputWithIcon = {
  flex: 1,
  border: 'none',
  color:'white',
  outline: 'none',
  padding: '12px',
  fontSize: '16px',
  borderRadius: '8px',
  backgroundColor: 'transparent',
};

const buttonStyle = {
  backgroundColor: 'green',
  color: '#fff',
  border: 'none',
  padding: '12px',
  fontSize: '16px',
  borderRadius: '8px',
  cursor: 'pointer',
};

const infoItem = {
  color:'white'

};

const socialStyle = {
 gap:'15px',
};

const socialIcon = {
  fontSize: '24px',
  color: 'green',
  gap:'10px',
  transition: 'transform 0.2s',
};

const scrollButton = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: 'green',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '12px',
  cursor: 'pointer',
  fontSize: '18px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  zIndex: 1000,
};

export default Contact;
