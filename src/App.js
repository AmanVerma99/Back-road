import './style.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Foorter from './components/Foorter';  // Assuming the corrected component name is 'Footer'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Foorter />
    </>
  );
}

export default App;
