import React from 'react';

const Hero = () => {
  const skills = [
    "Java / J2EE", "Python", "C / C++", 
    "Spring MVC & Hibernate", "HTML5 & CSS3", 
    "JavaScript", "SQL (MySQL / Oracle)", "Data Structures"
  ];

  return (
    <section style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Mastering the Core of Computer Science.<br />
          <span style={styles.highlight}>Building the Future of Enterprise Software.</span>
        </h1>
        
        <p style={styles.subtitle}>
          Hi, I’m <strong style={{color: '#fff'}}>Varsha Bajpai</strong>. I am an M.Sc. in Computer Management and CDAC-certified Engineer who has taught over 25 computer science subjects and guided enterprise-level software projects. I combine academic depth with practical engineering to build robust full-stack applications.
        </p>

        <div style={styles.badgeContainer}>
          {skills.map((skill, index) => (
            <span key={index} style={styles.badge}>{skill}</span>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <a href="#contact" style={styles.primaryBtn}>Contact Me</a>
          <a href="#projects" style={styles.secondaryBtn}>Explore My Projects ↓</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: '#0f172a', // Deep dark blue background
    color: '#94a3b8',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    fontFamily: 'system-ui, sans-serif'
  },
  content: {
    maxWidth: '800px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#f8fafc',
    marginBottom: '20px',
    lineHeight: '1.2',
  },
  highlight: {
    color: '#38bdf8', // Bright blue highlight
  },
  subtitle: {
    fontSize: '1.15rem',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  badgeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '40px',
  },
  badge: {
    backgroundColor: '#1e293b',
    color: '#38bdf8',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    border: '1px solid #334155',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  primaryBtn: {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: '0.2s',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#38bdf8',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    border: '1px solid #38bdf8',
    transition: '0.2s',
  }
};

export default Hero;