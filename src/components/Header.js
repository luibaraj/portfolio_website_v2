import React from 'react'

const Header = ({onToggle}) => {
  return (
    <nav>
		<div id="toggle" onClick={onToggle}>
			<i className="indicator"></i>
		</div>
		<div id = "links">
			<a href='#Proj'>Projects</a>
			<a href='#Skills'>Skills</a>
			<a href='#Contact'>Contact</a>
		</div>
	</nav>
  )
}

export default Header
