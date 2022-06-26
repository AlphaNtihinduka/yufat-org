import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import girlcode from '../images/girlcode.JPG';
import '../css/project.css';
import Footer from './Footer';
import '../css/footer.css';

const Project = () => (
  <>
    <Navigation />
    <Banner />
    <section className="welcome">
      <h1 className="projects-title">Our Projects</h1>
      <section className="project-section">
        <div className="projects-container">
          {/* {projects-card-1} */}
          <div className="projects-row">
            <h2 className="projects-card-heading">CodeWithHer</h2>

            <div className="projects-card">
              <div className="projects-img-container">
                <img src={girlcode} alt="" />
              </div>

              <div className="projects-sub-card">
                <div className="projects-sub-card-title">See More</div>

                <div className="projects-sub-card-text-container">
                  <p className="projects-sub-card-text">
                    Learning how to code gives young
                    refugee woman a chance for a brighter
                    future.YUFAT believes coding can help the girls can be
                    indipendent, earn and have a vision for their future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* {projects-card-2} */}
          <div className="projects-row">
            <h2 className="projects-card-heading">CodeWithHer</h2>

            <div className="projects-card">
              <div className="projects-img-container">
                <img src={girlcode} alt="" />
              </div>

              <div className="projects-sub-card">
                <div className="projects-sub-card-title">See More</div>

                <div className="projects-sub-card-text-container">
                  <p className="projects-sub-card-text">
                    Learning how to code gives young
                    refugee woman a chance for a brighter
                    future.YUFAT believes coding can help the girls can be
                    indipendent, earn and have a vision for their future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* {projects-card-3} */}
          <div className="projects-row">
            <h2 className="projects-card-heading">CodeWithHer</h2>

            <div className="projects-card">
              <div className="projects-img-container">
                <img src={girlcode} alt="" />
              </div>

              <div className="projects-sub-card">
                <div className="projects-sub-card-title">See More</div>

                <div className="projects-sub-card-text-container">
                  <p className="projects-sub-card-text">
                    Learning how to code gives young
                    refugee woman a chance for a brighter
                    future.YUFAT believes coding can help the girls can be
                    indipendent, earn and have a vision for their future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* {projects-card-4} */}
          <div className="projects-row">
            <h2 className="projects-card-heading">CodeWithHer</h2>

            <div className="projects-card">
              <div className="projects-img-container">
                <img src={girlcode} alt="" />
              </div>

              <div className="projects-sub-card">
                <div className="projects-sub-card-title">See More</div>

                <div className="projects-sub-card-text-container">
                  <p className="projects-sub-card-text">
                    Learning how to code gives young
                    refugee woman a chance for a brighter
                    future.YUFAT believes coding can help the girls can be
                    indipendent, earn and have a vision for their future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <Footer />
  </>
);

export default Project;
