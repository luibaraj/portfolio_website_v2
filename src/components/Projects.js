import React from 'react'
import Project from './Project'
import {useState, useEffect} from 'react';

const Projects = () => {
    const [slide, setSlide] = useState(0);
    const [shows, setShows] = useState([false, false]);
    

    useEffect(() => {
        let newShows = [false, false];
        newShows[slide] = true;
        setShows(newShows);

    }, [slide])

    function addOne() {
        if (slide === shows.length - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    }

    function subOne() {
        if (slide === 0) {
            setSlide(shows.length - 1);
        } else {
            setSlide(slide - 1);
        }
    }

    return (
        <div id="Proj">
            <h2>Portfolio Projects</h2>
            <div id="Projects" className="Proj-container">
                {shows[0] && <Project className="mySlides"  key='1' projectName="Porfolio Website" role="front-end developer" summary="The features included in this project are an 'About me' section, a project section, skills, and my contact information. I implemented the use of github for version control, developed the site itself using React JS and styled it with css, and made my page responsive to ensure it is viewable on multiple devices before uploading it to the web using netlify." tech="HTML, CSS, and Javascript (React)" link="https://incandescent-daffodil-1033ce.netlify.app/"/>}
                {shows[1] && <Project className="mySlides"  key='2' projectName="Client for Reddit" role="front-end developer" summary="This project features a search bar used to search for a subreddit. If the searched subreddit does not exist or is private then an alert will appear. When the search is complete, links to posts of the searched subreddit will appear below the search bar." tech="HTML, CSS, and Javascript (React, fetch API)" link="https://client-for-reddit.netlify.app/"/>}
            </div>
            <div className='buttons'>
                <button className="w3-button w3-display-left" onClick={subOne}>&#10094;</button>
                <button className="w3-button w3-display-right" onClick={addOne}>&#10095;</button>
            </div>
        </div>
  )
}

export default Projects
