import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Banner from './Banner';
import '../css/home.css';
import girlcode from '../images/girlcode.JPG';
import codingKids from '../images/CodingKids-1.JPG';
import coding1 from '../images/coding1.jpg';
import cssicon from '../images/cssicon.png';
import microone from '../images/microone.png';
import htmlicon from '../images/htmlicon.png';
import javascripticon from '../images/javascripticon.png';
import pythonicon from '../images/pythonicon.png';

const Home = () => (
  <>
    <Navigation />
    <section className="welcome">
      {/* <h1 className="magic-title">Welcome to our page!</h1> */}

      {/* {Banner-section} */}
      <Banner />

      {/* About-section */}
      <div className="about-section">
        <div className="about-headings">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            YUFAT is a charity organisation based in Kyaka II refugee Settlement, Uganda.
          </p>
        </div>

        <div className="about-row">
          <div className="about-container">
            {/* {about-card-1} */}
            <div className="about-card">
              <h3 className="about-card-heading">Vision</h3>
              <p className="about-card-text">
                Equip the community with creative mindset
                for better Africa.
                Through web and software development, jobless
                and poverty can be fought against in Africa.
              </p>
            </div>

            {/* {about-card-2} */}
            <div className="about-card">
              <h3 className="about-card-heading">Mission</h3>
              <p className="about-card-text">
                To groom the
                transformed young African generation
                by the new technology towards development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {What we do-section} */}
      <section className="aim-section">
        <div className="aim-row">

          <h1 className="aim-title sect-title">What We do</h1>
          {/* [aim-container-1] */}
          <div className="aim-container">
            <div className="aim-img-container">
              <img src={coding1} alt="coding1" />
            </div>

            <div className="aim-text-container">
              <h2 className="aim-text-title">#Introduction to ICT</h2>
              <p className="aim-text-paragraph">
                The continous changing of technology forces
                every individual to be equipped with technology skills.
                This is the reality that can never be avoided now. Every member
                of the community needs the introduction to
                ICT skills. YUFAT equips ICT skills to community youth and children.
              </p>
            </div>
          </div>

          {/* [aim-container-2] */}
          <div className="aim-container">
            <div className="aim-img-container">
              <img src={codingKids} alt="coding Kids" />
            </div>

            <div className="aim-text-container">
              <h2 className="aim-text-title">Computer Aided Learning(CAL)</h2>
              <p className="aim-text-paragraph">
                Children in Kyaka II refugee settlement faced learning
                crisis due to lack of digital skills among children and teachers.
                This brings us to thtink about the new system of learning,
                reimagining
                education. Depending on research, many teachers and
                students do not have knowledge in
                using digital devices and this made online learning hard to be conducted.
                YUFAT will
                partner with schools to end this challenge
                through ICT training. YUFAT is preparing to offer
                mobile ICT learning by finding students at their respective schools.
              </p>
            </div>
          </div>

          {/* [aim-container-3] */}
          <div className="aim-container">
            <div className="aim-img-container">
              <img src={girlcode} alt="girl code" />
            </div>
            <div className="aim-text-container">
              <h2 className="aim-text-title">#CodeWithHer</h2>
              <p className="aim-text-paragraph">
                Learning how to code gives young refugee woman a chance
                for a brighter future. Many girls are forced into marriage in refugee
                settlement by parents, relatives or situation.
                Digital skills will help her get variety
                of employment opportunities. Through CodeWithHer club,
                YUFAT believes coding can help the girls can be
                indipendent, earn and have a vision for their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <h1 className="aim-title sect-title">Blog and posts</h1>
      <p className="common-programms">These common technologies give a refugee a chance to get hired globally.</p>
      {/* {langs-covered} */}
      <section className="lungs-section">
        <div className="lungs-container">
          {/* {lung-card-1} */}
          <div className="lungs-card-image">
            <img src={cssicon} alt="css icon" />
          </div>

          {/* {lung-card-2} */}
          <div className="lungs-card-image">
            <img src={htmlicon} alt="html icon" />
          </div>

          {/* {lung-card-3} */}
          <div className="lungs-card-image">
            <img src={javascripticon} alt="javascript icon" />
          </div>

          {/* {lung-card-4} */}
          <div className="lungs-card-image">
            <img src={pythonicon} alt="python icon" />
          </div>
        </div>
      </section>

      <section className="exper-section">
        <div className="exper-title">A New Learning Experience</div>

        <p className="exper-text">
          Our team
          supports the student throughout the journey with us, and your career.
          Refugees are equipped with skills for global opportunities
        </p>

        <div className="learning-experience-container">
          {/* {exper-card-1} */}
          <div className="exper-row">
            <div className="exper-card">
              <div className="exper-img-container">
                <img src={microone} alt="microone" />
              </div>

              <div className="exper-card-description">
                <h2 className="exper-card-description-title">COLLABORATIVE LEARNING</h2>

                <div className="exper-card-text">
                  The critical thinking is developed through learning
                  with other students by doing collaborative projects and
                  implementing solutions.
                </div>
              </div>
            </div>
          </div>

          {/* {exper-card-2} */}
          <div className="exper-row">
            <div className="exper-card">
              <div className="exper-img-container">
                <img src={microone} alt="microone" />
              </div>

              <div className="exper-card-description">
                <h2 className="exper-card-description-title">COMMITTED VOLUNTEERS</h2>
                We focus to equipping the society members with digital knowledge.
                <div className="exper-card-text" />
              </div>
            </div>
          </div>

          {/* {exper-card-3} */}
          <div className="exper-row">
            <div className="exper-card">
              <div className="exper-img-container">
                <img src={microone} alt="microone" />
              </div>

              <div className="exper-card-description">
                <h2 className="exper-card-description-title"> SUPPORT AND ACCOUNTABILITY</h2>

                <div className="exper-card-text">
                  Receive support from our dedicated ICT instructors,
                  mentors, Student alumni, and more
                </div>
              </div>
            </div>
          </div>

          {/* {exper-card-4} */}
          <div className="exper-row">
            <div className="exper-card">
              <div className="exper-img-container">
                <img src={microone} alt="microone" />
              </div>

              <div className="exper-card-description">
                <h2 className="exper-card-description-title">NO UPFRONT COST</h2>

                <div className="exper-card-text">
                  You owe us nothing until you get a job —no matter what country you’re in.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  </>
);

export default Home;
