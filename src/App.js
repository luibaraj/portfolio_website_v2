import React from 'react';

import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';


function App() {
  function handleDarkMode() {
    const toggle = document.getElementById('toggle');
    const nav = document.querySelector('nav');
    const links = document.getElementById('links');
    const projects = document.getElementById('Projects');
    const projectDiv = document.getElementById('Proj');
    const intro = document.getElementById('Intro');
    const skills = document.getElementById('Skills');
    // const contact = document.getElementById('Contact');
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    links.classList.toggle('active');
    projects.classList.toggle('active');
    projectDiv.classList.toggle('active');
    intro.classList.toggle('active');
    skills.classList.toggle('active');
    // contact.classList.toggle('active');
  }

  return (
    <div className="App">
      <Header onToggle = {handleDarkMode}/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
