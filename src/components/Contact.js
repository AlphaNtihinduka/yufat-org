import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import '../css/contact.css';
import Footer from './Footer';
import '../css/footer.css';
import mailicon from '../images/mailicon.png';
import whatspicon from '../images/whatspicon.png';
import twittericon from '../images/twittericon.png';
import locationicon from '../images/locationicon.png';

const Contact = () => (
  <>
    <Navigation />
    <Banner />
    <section className="welcome">
      <section className="contact-section">
        <div className="contact-bar-links">
          <div className="contact-bar-left-links">
            <a href="www.youtube.com" className="envelope-icon foot-icon mail-contact">
              <img src={mailicon} alt="email" className="icon-images" />
              <span>info@yufat.org</span>
            </a>

            <a href="www.youtube.com" className="envelope-icon foot-icon">
              <img src={whatspicon} alt="email" className="icon-images" />
              <span>Whatsapp</span>
            </a>
          </div>

          <div className="contact-bar-right-links">
            <a href="www.youtube.com" className="envelope-icon foot-icon">
              <img src={twittericon} alt="email" className="icon-images" />
              <span>Twitter</span>
            </a>

            <a href="www.youtube.com" className="envelope-icon foot-icon">
              <img src={locationicon} alt="email" className="icon-images" />
              <span>Location</span>
            </a>
          </div>
        </div>

        <h3 className="form-title">Reach Us</h3>
        <div className="form">
          <div className="inputs">
            <input type="text" placeholder="Enter Your Name" required />
            <input type="email" placeholder="Enter Email address" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="10" placeholder="Message" required />
            <button type="button" className="submit-btn">Submit</button>
          </div>
        </div>
      </section>
    </section>

    <Footer />
  </>
);

export default Contact;
