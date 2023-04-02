import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Sections/Header';
import Services from './Sections/Services';
import Projects from './Sections/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Services />
    <Projects />
  </React.StrictMode>
);
