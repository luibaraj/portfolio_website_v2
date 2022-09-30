import React from 'react'

const Card = ({img, name}) => {
  return (
    <div className="Card">
        <div className="Skills-img">
            <img src={img} alt="Javascript"/>
        </div>
        <div className="Skills-text">
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Card
