import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/navigation.css';
import yufatlog from '../images/yufatlog.png'

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(true)
  return (
    <nav className="nav">
        <div className='sub-nav'>
        <div className="right-nav"> <img src={yufatlog} alt="yufat logo" className='yufatlogo'/> </div>
        <div className="left-nav" >
          <ul className= {isMobile?'left-nav-links' : "left-desk-nav"}
          onClick = {() => setIsMobile(false)}
          >
          <Link to="/" className='links'>Home </Link>
          <Link to="/team" className='links'>Team </Link>
          <Link to="/project" className='links'>Projects</Link>
          <Link to="/about" className='links'>Contact Us</Link>
          </ul>
        </div>
        </div>
      <button className='mobile-hamburger'
      onClick = {()=> setIsMobile(!isMobile)}
      >
        {isMobile? "Bars": "Times"}
      </button>
 
  </nav>
  )

};

export default Navigation;