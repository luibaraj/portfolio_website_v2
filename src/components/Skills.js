import React from 'react'
import Card from './Card.js';
import jsImg from "./images/JavaScript_Logo.png";
import pyImg from "./images/Python_logo_icon.png";
import htmlImg from "./images/html5-logo-png-transparent-5.png";
import cssImg from './images/css-3-logo-png-transparent.png';
import reactImg from './images/react js-1000x1000.jpg'



const Skills = () => {
  return (
    <div id="Skills">
      <h2>My Skills</h2>
      <div className="Card-container">
        <Card img={jsImg} name="Javascript"/>
        <Card img={pyImg} name="Python"/>
        <Card img={htmlImg} name="HTML"/>
      </div>
      <div className="Card-container">
        <Card img={cssImg} name="CSS"/>
        <Card img={reactImg} name="React"/>
      </div>
      {/* Card-container for screen <=923px */}
      <div className="Card-container pair">
        <Card img={jsImg} name="Javascript"/>
        <Card img={pyImg} name="Python"/>
      </div>
      <div className="Card-container pair">
        <Card img={htmlImg} name="HTML"/>
        <Card img={cssImg} name="CSS"/>
      </div>
      <div className="Card-container pair">
        <Card img={reactImg} name="React"/>
      </div>
      {/* Card-container for screen <=923px */}
      <div className="Card-container single">
        <Card img={jsImg} name="Javascript"/>
      </div>
      <div className="Card-container single">
        <Card img={pyImg} name="Python"/>
      </div>
      <div className="Card-container single">
        <Card img={htmlImg} name="HTML"/>
      </div>
      <div className="Card-container single">
        <Card img={cssImg} name="CSS"/>
      </div>
      <div className="Card-container single">
        <Card img={reactImg} name="React"/>
      </div>
      
    </div>
  )
}

export default Skills
