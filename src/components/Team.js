import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import lrtn from '../images/lrtn.jpg';
import '../css/team.css';
import Footer from './Footer';
import Banner from './Banner';
import '../css/footer.css';
import elvis from '../images/elvis.jpg';
import alpha from '../images/alpha.jpg';
import profile from '../images/profile.png';
import sifa from '../images/sifa.jpg';

const Team = () => (
  <>
    <Navigation />
    <Banner />
    <section className="welcome">
      <section className="team-section">
        <h1 className="team-title">Meet our team</h1>
        <div className="team-container">
          <div className="team-row">

            {/* {team-card-1} */}
            <div className="team-card">
              <div className="team-img-container">
                <img src={alpha} alt="alpha" />
              </div>

              <div className="team-card-descr">
                <h3 className="team-card-title">NTIHINDUKA Alpha</h3>
                <p className="team-card-text">CEO</p>
              </div>

              <div className="team-card-footer" />
            </div>

            {/* {team-card-2} */}
            <div className="team-card">
              <div className="team-img-container">
                <img src={lrtn} alt="Laurent" />
              </div>

              <div className="team-card-descr">
                <h3 className="team-card-title">MUGWANEZA Laurent</h3>
                <p className="team-card-text">Finance Director</p>
              </div>

              <div className="team-card-footer" />
            </div>

            {/* {team-card-3} */}
            <div className="team-card">
              <div className="team-img-container">
                <img src={elvis} alt="elvis" />
              </div>

              <div className="team-card-descr">
                <h3 className="team-card-title">NDAKYAISABA Elvis</h3>
                <p className="team-card-text">Programs Director</p>
              </div>

              <div className="team-card-footer" />
            </div>

            {/* {team-card-4} */}
            <div className="team-card">
              <div className="team-img-container">
                <img src={sifa} alt="sifa mukenge" />
              </div>

              <div className="team-card-descr">
                <h3 className="team-card-title">MUKENGE Sifa</h3>
                <p className="team-card-text">Human Resource</p>
              </div>

              <div className="team-card-footer" />
            </div>

            {/* {team-card-5} */}
            <div className="team-card">
              <div className="team-img-container">
                <img src={profile} alt="alphonse" />
              </div>

              <div className="team-card-descr">
                <h3 className="team-card-title">RUTEMBESE Alphonse</h3>
                <p className="team-card-text">Education coordinator</p>
              </div>

              <div className="team-card-footer" />
            </div>

            {/* {team-card-6} */}
            <div className="team-card">
              <div className="team-img-container">
                <img src={profile} alt="juliet" />
              </div>

              <div className="team-card-descr">
                <h3 className="team-card-title">IRADUKUNDA Juliet</h3>
                <p className="team-card-text">Secretary</p>
              </div>

              <div className="team-card-footer" />
            </div>

          </div>
        </div>

        <div className="volunteer-button">
          <Link to="/About" className="volunteer-btn">Volunteer With Us</Link>
        </div>
      </section>
    </section>

    <Footer />
  </>
);

export default Team;
