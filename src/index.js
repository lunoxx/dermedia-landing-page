import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Sections:
import Header from './Sections/Header';
import Services from './Sections/Services';
import Projects from './Sections/Projects';
import WhyUS from './Sections/WhyUS';
import Contact from './Sections/Contact';
import Philosophy from './Sections/Philosophy';
import Footer from './Sections/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Services />
    <Projects />
    <WhyUS />
    <Contact />
    <Philosophy />
    <Footer />
  </React.StrictMode>
);
