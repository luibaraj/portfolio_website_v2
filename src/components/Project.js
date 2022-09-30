import React from 'react'

const Project = ({projectName, role, summary, tech, link}) => {
  return (
    <div className="Project">
        <div className="Text">
            <p className="p1">{projectName + ' | role: '}<span>{role}</span></p>

            <p className="p3"><span>Tech Stack: </span>{tech}&emsp;<a href={link} target="_blank" rel="noreferrer">Click for Demo</a></p>

            <p className="p2"><span>Summary: </span>{summary}</p>
        </div>
    </div>
  )
}

export default Project
