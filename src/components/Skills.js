import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';

const skills = [
  { name: 'HTML', icon: '🌐' },       // 0
  { name: 'CSS', icon: '🎨' },        // 1
  { name: 'JavaScript', icon: '⚡' }, // 2
  { name: 'React.js', icon: '⚛️' },   // 3
  { name: 'DSA', icon: '🧠' },        // 4
  { name: 'Python', icon: '🐍' },     // 5
  { name: 'Django', icon: '🚀' },     // 6
  { name: 'MySQL', icon: '💾' },      // 7
  { name: 'Git & GitHub', icon: '🔧' }, // 8
];

// First 3 visible skills
const initialVisible = skills.slice(0, 3);

// Distribute remaining skills behind each card
const behindStacks = [[], [], []];
skills.slice(3).forEach((skill, idx) => {
  behindStacks[idx % 3].push(skill);
});

const STACK_OFFSET = 15; // px offset for stacked cards behind front

const SkillsRowWithStacks = () => {
  // current visible skill index per card (0 = front skill)
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  const handleClick = (cardIndex) => {
    const maxStackLength = behindStacks[cardIndex].length;
    if (maxStackLength === 0) return; // nothing to cycle

    const newIndexes = [...currentIndexes];
    // cycle index: 0 means front skill, 1..n are behind skills
    newIndexes[cardIndex] = (newIndexes[cardIndex] + 1) % (maxStackLength + 1);
    setCurrentIndexes(newIndexes);
  };

  // Get skill to show in front based on index
  const getSkillForCard = (cardIdx) => {
    const idx = currentIndexes[cardIdx];
    if (idx === 0) return initialVisible[cardIdx];
    return behindStacks[cardIdx][idx - 1];
  };

  return (
    <section id="skills" style={{ padding: '60px 20px', textAlign: 'center' ,backgroundColor:'black'}}>
      <h2 style={{color:'white'}}>Click The Skills For View More</h2>
      <h3 style={{color:'white'}}>
         {''}
         <span style={{ color: 'green',fontSize: '1.5rem', fontWeight: '600' }}>
                    <Typewriter
                      words={['Passionate','Full-Stack Web Developer','Got Trained In','Besant Technologies','At Banglore']}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
        </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '40px',
          position: 'relative',
        }}
      >
        {[0, 1, 2].map((cardIdx) => {
          const frontSkill = getSkillForCard(cardIdx);
          const behindSkills = behindStacks[cardIdx];
  return (
    <div
       key={cardIdx}
              style={{
                position: 'relative',
                width: 140,
                height: 180,
                cursor: 'pointer',
              
              }}
              onClick={() => handleClick(cardIdx)}
            >
              {/* Stack of behind skills */}
              {behindSkills.map((skill, idx) => {
                // Position smaller cards behind front, offset diagonally
                // Only show cards that are not currently front (exclude currentIndexes)
                // So the frontSkill is on top, rest behind
                // We show all behind skills, but visually stacked with smaller size & opacity

                // Calculate zIndex so topmost behind card is nearest to front
                const zIndex = idx;

                return (
                  <div
                    key={skill.name}
                    style={{
                      position: 'absolute',
                      top: STACK_OFFSET * (behindSkills.length - idx), // stacked downward
                      left: STACK_OFFSET * (behindSkills.length - idx), // stacked rightward
                      width: 120,
                      height: 160,
                      borderRadius: 12,
                      backgroundColor: 'black',
                      color: '#2563eb',
                      boxShadow: '0 4px 8px rgba(18, 100, 15, 0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '2.5rem',
                      opacity: 0.7,
                      userSelect: 'none',
                      zIndex: zIndex,
                      pointerEvents: 'none', // clicks go through behind cards
                    }}
                  >
                    <span>{skill.icon}</span>
                    <p style={{ marginTop: 10, fontWeight: '600', fontSize: '1rem' }}>{skill.name}</p>
                  </div>
                );
              })}

              {/* Front skill card */}
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.1}
                scale={1.05}
                style={{
                  width: 140,
                  height: 150,
                  borderRadius: 12,
                  backgroundColor: 'black',
                  color: 'white',
                  boxShadow: '0 6px 12px rgba(29, 8, 8, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 100,
                  userSelect: 'none',
                }}
                tiltEnable={true}
              >
                <span style={{ fontSize: '3rem' }}>{frontSkill.icon}</span>
                <p style={{ marginTop: 15, fontWeight: '700' }}>{frontSkill.name}</p>
              </Tilt>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsRowWithStacks;
