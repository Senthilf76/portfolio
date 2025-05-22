// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import pubmedImg from '../assets/pro.jpeg';
import pubmedImg1 from '../assets/tour.jpg'; // Make sure the path is correct

const Projects = () => { 
  const projectList = [
    {
      title: 'PubMed API App',
      description: 'An app that fetches and displays medical research articles using the PubMed API. Useful for researchers and students to access scientific literature.',
      image: pubmedImg
    },
    {
      title: 'TourX',
      description: 'A travel and tourism web application that lets users explore and book tours. Built using React and integrates maps and filtering features.',
      image:pubmedImg1
    }
  ];
  
  return (
    <motion.section 
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: '60px 300px', textAlign: 'center', backgroundColor: 'black', }}
    >
      <h2 style={{ color: 'white' }}>Projects</h2>
      <div className="projects" style={{ display: 'grid', gap: '60px', maxWidth: '800px', margin: 'auto',color:'white' }}>
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: '0.8' }}
            transition={{ delay: index * 0.2, duration: 1 }}
            viewport={{ once: true }}
            style={{
              background: project.image
                ? `url(${project.image}) center/cover no-repeat`
                : 'white',
              color: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              position: 'relative',
              minHeight: '200px',
            }}
          >
            {/* Optional dark overlay for better readability */}
            {project.image && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  borderRadius: '12px',
                  zIndex: 1,
                }}
              />
            )}
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3>{project.title}</h3>
              <p style={{color:'white',
                fontSize:'15px',
                textAlign:'left',
              }}>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
