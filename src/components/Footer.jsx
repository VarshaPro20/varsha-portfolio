import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.title}>Let's Build Something Great Together</h2>
        <p style={styles.subtitle}>
          I am currently looking for Full-Stack Software Engineering opportunities. Reach out if you need a disciplined engineer with deep domain knowledge and solid problem-solving skills!
        </p>
        
        <div style={styles.contactGrid}>
          <div style={styles.contactItem}>
            <span style={styles.label}>Email</span>
            <a href="mailto:varsha.s.bajpai@gmail.com" style={styles.link}>varsha.s.bajpai@gmail.com</a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.label}>Phone</span>
            <a href="tel:+917387520222" style={styles.link}>+91 9561634990</a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.label}>Location</span>
            <span style={styles.text}>Latur, Maharashtra, India</span>
          </div>
        </div>

        <div style={styles.bottomBar}>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Varsha Bajpai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  container: {
    backgroundColor: '#0b0f19',
    color: '#94a3b8',
    padding: '60px 20px 20px 20px',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'system-ui, sans-serif',
    borderTop: '1px solid #1e293b'
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
    color: '#f8fafc',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '40px',
    color: '#64748b',
  },
  contactGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    marginBottom: '50px',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    color: '#38bdf8',
    fontWeight: '600',
    marginBottom: '5px',
    letterSpacing: '0.5px'
  },
  link: {
    color: '#f8fafc',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
  },
  text: {
    color: '#f8fafc',
    fontSize: '1rem',
    fontWeight: '500',
  },
  bottomBar: {
    borderTop: '1px solid #1e293b',
    paddingTop: '20px',
  },
  copyright: {
    fontSize: '0.85rem',
    color: '#475569',
    margin: 0,
  }
};

export default Footer;