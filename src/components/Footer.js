import React from 'react';
import { faTwitter, faFacebook, faWhatsapp, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => (
  <div className="footer">
      <div className='left-footer'>
        <h2 className='footer-title title-footer'>Quick access</h2>
        <div className='quick-links'>
         <Link to="/About" className='footer-links'>Who we are </Link>
         <Link to="/About" className='footer-links'>Where we are </Link>
         <Link to="/project" className='footer-links'>What we do</Link>
        </div>
      </div>
      <div>
             <h2 className='follow-us title-footer'>Follow Us</h2>
      <div className='social-links'>
      <div>
      <a href="www.youtube.com" className='youtube-icon foot-icon'>
            <FontAwesomeIcon icon={faTwitter} size='2x'/> Twitter
        </a>

        <a href="www.youtube.com" className='facebook-icon foot-icon'>
            <FontAwesomeIcon icon={faFacebook} size='2x'/> Facebook
        </a>
      </div>

        <div>
        <a href="www.youtube.com" className='whatsupicon foot-icon'>
            <FontAwesomeIcon icon={faWhatsapp} size='2x'/> Whatsapp
        </a>

        <a href="www.youtube.com" className='Instagramicon foot-icon'>
            <FontAwesomeIcon icon={faInstagram} size='2x'/> Instagram
        </a>
        </div>

      </div>
    <p className='footer-email'>ntivuguruzwaphilemon0@gmail.com</p>
      </div>
 
  </div>
);

export default Footer;