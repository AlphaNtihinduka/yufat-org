import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
// import { faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../css/contact.css';
import Footer from './Footer';
import '../css/footer.css';

const Contact = () => (
  <>
    <Navigation />
    <Banner />
    <section className="welcome">
      <section className="contact-section">
        <div className="contact-bar-links">
          <div>
            <a href="www.youtube.com" className="envelope-icon foot-icon">
              {' '}
              Envelope
              {/* <FontAwesomeIcon icon={faEnvelope} size='2x'/> Envelope */}
            </a>

            <a href="www.youtube.com" className="envelope-icon foot-icon">
              {' '}
              Envelope
              {/* <FontAwesomeIcon icon={faWhatsapp} size='2x'/> Envelope */}
            </a>
          </div>

          <div>
            <a href="www.youtube.com" className="envelope-icon foot-icon">
              {' '}
              Twitter
              {/* <FontAwesomeIcon icon={faTwitter} size='2x'/> Twitter */}
            </a>

            <a href="www.youtube.com" className="envelope-icon foot-icon">
              {' '}
              Kyegegwa
              {/* <FontAwesomeIcon icon={faLocation} size='2x'/> Kyegegwa */}
            </a>
          </div>
        </div>

        <h3 className="form-title">Reach Us</h3>
        <div className="form">
          <div className="inputs">
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Email address" />
            <input type="text" placeholder="Subject" />
            <textarea rows="10" placeholder="Message" />
          </div>
        </div>
      </section>
    </section>

    <Footer />
  </>
);

export default Contact;
