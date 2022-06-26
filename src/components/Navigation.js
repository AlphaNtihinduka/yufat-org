import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import yufatlog from '../images/yufatlog.png';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <nav className="nav">
      <div className="sub-nav">
        <div className="right-nav">
          {' '}
          <img src={yufatlog} alt="yufat logo" className="yufatlogo" />
          {' '}
        </div>
        <div className="left-nav">
          <button
            type="button"
            className={isMobile ? 'left-nav-links' : 'left-desk-nav'}
            onClick={() => setIsMobile(false)}
          >
            <Link to="/" className="links">Home </Link>
            <Link to="/team" className="links">Team </Link>
            <Link to="/project" className="links">Projects</Link>
            <Link to="/about" className="links">Contact Us</Link>
          </button>
        </div>
      </div>
      <button
        type="button"
        className="mobile-hamburger"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? 'Bars' : 'Times'}
      </button>

    </nav>
  );
};

export default Navigation;
