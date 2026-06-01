import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "TGT Teacher",
      company: "Podar International School, Latur (MH)",
      duration: "April 2024 – Present (with previous tenures)",
      bullets: [
        "Designed and implemented custom school-wide digital utilities (Online Interview Drive and EVM tools) to automate internal admin processes.",
        "Managed, trained, and mentored hundreds of students in end-to-end frontend web development, guiding them from raw coding to live deployment.",
        "Demonstrated agility and structural adaptation to deliver complex engineering logic under strict institutional timelines."
      ]
    },
    {
      role: "Assistant Professor",
      company: "Dayanand College of Commerce, Latur (MH)",
      duration: "June 2006 – August 2017",
      bullets: [
        "Served as the primary 'Resource Person in Computer Applications' for Ph.D. coursework, bridging academic research with application software.",
        "Taught over 25 distinct computer science subjects, including C, C++, Core Java, and Python, establishing an absolute mastery of programming paradigms.",
        "Developed expert-level capabilities in technical documentation, system logical mapping, and cross-functional project scoping."
      ]
    }
  ];

  return (
    <section id="experience" style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>Technical Leadership & Experience</h2>
        <p style={styles.sectionSubtitle}>Bridging the gap between deep computer science fundamentals and modern development.</p>
        
        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} style={styles.timelineItem}>
              <div style={styles.headerRow}>
                <div>
                  <h3 style={styles.roleTitle}>{exp.role}</h3>
                  <h4 style={styles.companyName}>{exp.company}</h4>
                </div>
                <span style={styles.duration}>{exp.duration}</span>
              </div>
              <ul style={styles.bulletList}>
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} style={styles.bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'system-ui, sans-serif'
  },
  content: {
    maxWidth: '800px',
    width: '100%',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#f8fafc',
    textAlign: 'center',
    marginBottom: '10px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    marginBottom: '50px',
    color: '#64748b',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    position: 'relative',
    borderLeft: '2px solid #334155',
    paddingLeft: '25px',
    marginLeft: '10px'
  },
  timelineItem: {
    position: 'relative'
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '15px'
  },
  roleTitle: {
    fontSize: '1.4rem',
    color: '#f8fafc',
    margin: 0
  },
  companyName: {
    fontSize: '1rem',
    color: '#38bdf8',
    margin: '5px 0 0 0',
    fontWeight: '500'
  },
  duration: {
    fontSize: '0.9rem',
    color: '#64748b',
    backgroundColor: '#1e293b',
    padding: '4px 12px',
    borderRadius: '12px',
    border: '1px solid #334155'
  },
  bulletList: {
    margin: 0,
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  bullet: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#94a3b8'
  }
};

export default Experience;