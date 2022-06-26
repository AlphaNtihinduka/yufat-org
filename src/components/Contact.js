import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import '../css/contact.css';
import Footer from './Footer';
import '../css/footer.css';
import mailicon from '../images/mailicon.png';
import whatspicon from '../images/whatspicon.png';

const Contact = () => (
  <>
    <Navigation />
    <Banner />
    <section className="welcome">
      <section className="contact-section">
        <div className="contact-bar-links">
          <div>
            <a href="www.youtube.com" className="envelope-icon foot-icon">
              <img src={mailicon} alt="email" className="icon-images" />
              info@yufat.org
            </a>

            <a href="www.youtube.com" className="envelope-icon foot-icon">
              <img src={whatspicon} alt="email" className="icon-images" />
              info@yufat.org
            </a>
          </div>

          <div>
            <a href="www.youtube.com" className="envelope-icon foot-icon">
              <img src={mailicon} alt="email" className="icon-images" />
              info@yufat.org
            </a>

            <a href="www.youtube.com" className="envelope-icon foot-icon">
              <img src={mailicon} alt="email" className="icon-images" />
              info@yufat.org
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
