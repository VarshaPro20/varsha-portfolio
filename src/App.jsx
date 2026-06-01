import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Hero />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;