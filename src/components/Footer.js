import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => (
  <div className="footer">
    <div className="sub-footer">
      <div className="donate-btn">Donate</div>
      <div className="left-footer">
        <h2 className="footer-title title-footer">Quick access</h2>
        <div className="quick-links">
          <Link to="/About" className="footer-links">Who we are </Link>
          <Link to="/About" className="footer-links">Where we are </Link>
          <Link to="/project" className="footer-links">What we do</Link>
        </div>
      </div>
      <div>
        <h2 className="follow-us title-footer">Follow Us</h2>
        <div className="social-links">
          <div>
            <a href="www.youtube.com" className="youtube-icon foot-icon">
              {' '}
              Twitter
              {/* <FontAwesomeIcon icon={faTwitter} size='2x'/> Twitter */}
            </a>

            <a href="www.youtube.com" className="facebook-icon foot-icon">
              {' '}
              Facebook
              {/* <FontAwesomeIcon icon={faFacebook} size='2x'/> Facebook */}
            </a>
          </div>
          <div>
            <a href="www.youtube.com" className="whatsupicon foot-icon">
              {' '}
              Whatsapp
              {/* <FontAwesomeIcon icon={faWhatsapp} size='2x'/> Whatsapp */}
            </a>

            <a href="www.youtube.com" className="Instagramicon foot-icon">
              {' '}
              Instagram
              {/* <FontAwesomeIcon icon={faInstagram} size='2x'/> Instagram */}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right">
      <p className="copyright-text">© Copyright 2022. YUFAT. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
