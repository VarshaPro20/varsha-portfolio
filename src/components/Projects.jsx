import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Course Feedback System (CFS)",
      category: "Enterprise Solution",
      stack: "J2EE, MySQL",
      description: "Developed a secure, scalable web application for educational organizations allowing students to submit qualitative and quantitative evaluation data. Replaced slow, manual paperwork with an automated system, significantly increasing data accuracy.",
    },
    {
      title: "Online Interview Drive Platform",
      category: "Production Innovation",
      stack: "HTML5, CSS3, JavaScript, Google Sheets API",
      description: "Architected and deployed an automated, real-time testing platform to assess candidates' subject-matter knowledge during hiring drives. Generated instant test results, streamlining the shortlisting process and reducing administrative overhead.",
    },
    {
      title: "Interactive Electronic Voting Machine",
      category: "Educational Innovation",
      stack: "Core Java, Excel Database Integration",
      description: "Built a functional, event-driven voting simulator utilized for experiential learning and educational election cycles. Successfully processed real-time inputs for Grades VI–VIII, introducing students to practical IT development concepts.",
    }
  ];

  return (
    <section id="projects" style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <p style={styles.sectionSubtitle}>Demonstrating core software architecture and real-world execution.</p>
        
        <div style={styles.grid}>
          {projectList.map((project, index) => (
            <div key={index} style={styles.card}>
              <span style={styles.category}>{project.category}</span>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.stack}><strong>Stack:</strong> {project.stack}</p>
              <p style={styles.description}>{project.description}</p>

            <div style={styles.linkContainer}>
              {/* <span style={styles.codeLink}>Code Repository ↗</span> */}
              <span style={{ fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>Deployment Details Available on Request</span>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundColor: '#0b0f19', // Slightly darker dark blue for contrast
    color: '#94a3b8',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'system-ui, sans-serif'
  },
  content: {
    maxWidth: '1000px',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1xl))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #334155',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    color: '#38bdf8',
    fontWeight: '600',
    letterSpacing: '1px',
    marginBottom: '10px',
    display: 'block',
  },
  projectTitle: {
    fontSize: '1.4rem',
    color: '#f8fafc',
    margin: '0 0 10px 0',
  },
  stack: {
    fontSize: '0.9rem',
    color: '#e2e8f0',
    marginBottom: '15px',
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    flexGrow: 1,
  },
  linkContainer: {
    borderTop: '1px solid #334155',
    paddingTop: '15px',
  },
  codeLink: {
    color: '#38bdf8',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
  }
};

export default Projects;