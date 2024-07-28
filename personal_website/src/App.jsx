import React, { useEffect, useRef, useState } from 'react';
import { FaHome, FaUser, FaFileAlt } from 'react-icons/fa';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'boxicons/css/boxicons.min.css';

const sections = {
  home: '#home',
  profile: '#profile',
  documents: '#documents',
  skills: '#skills'
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const typedElement = useRef(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ['Software Developer', 'Student', 'Programmer'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });

      return () => typed.destroy();
    }
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    const target = document.querySelector(sections[section]);

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeSection = document.querySelector(sections['home']);
      const profileSection = document.querySelector(sections['profile']);
      const documentsSection = document.querySelector(sections['documents']);

      if (homeSection && profileSection && documentsSection) {
        const homeTop = homeSection.offsetTop;
        const profileTop = profileSection.offsetTop;
        const documentsTop = documentsSection.offsetTop;

        if (scrollPosition < profileTop) {
          setActiveSection('home');
        } else if (scrollPosition >= profileTop && scrollPosition < documentsTop) {
          setActiveSection('profile');
        } else {
          setActiveSection('documents');
        }
      }

      setShowBackToTop(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      <div className="menu-container">
        <div
          className={`menu-item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => handleClick('home')}
        >
          <FaHome size={24} />
          <span className="menu-text">Home</span>
        </div>
        <div
          className={`menu-item ${activeSection === 'profile' ? 'active' : ''}`}
          onClick={() => handleClick('profile')}
        >
          <FaUser size={24} />
          <span className="menu-text">Profile</span>
        </div>
        <div
          className={`menu-item ${activeSection === 'documents' ? 'active' : ''}`}
          onClick={() => handleClick('documents')}
        >
          <FaFileAlt size={24} />
          <span className="menu-text">Resume</span>
        </div>
      </div>

      <div id='home' className='section hero' data-aos='fade-up'>
        <div className='hero-background'></div>
        <div className='hero-content'>
          <h1>Suson Sapkota</h1>
          <p>I'm <span className="typed-text" ref={typedElement}></span></p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://github.com/suson7" className="github"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/suson-sapkota-021227239/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            <a href="" className="mail-send"><i className="bx bx-mail-send"></i></a>
            <a href="" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/susonn7/" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://drive.google.com/file/d/1BsVA5S-WKtqEZF-Sd8Gb-F1hDeq7Oyl-/view" className="cloud-download"><i className="bx bx-cloud-download"></i></a>
          </div>
        </div>
      </div>

      <div id='profile' className='section' data-aos='fade-up'>
        <div className="profile-container">
          <div className="pro-background"></div>
          <div className="profile-content">
            <div className="about-header-container">
              <h1 className="about-header">ABOUT</h1>
            </div>
            <div className="info-row">
              <div className="info-content">
                <p>
                <h2 className="custom-margin-top">Software Developer & QA Tester.</h2>

                  <span className="info-item"><b>Degree:</b> Bachelor's in Computer Science<br /></span>
                  <span className="info-item"><b>Email:</b> sapkotasuson@gmail.com<br /></span>
                  <span className="info-item"><b>City:</b> Herndon, VA, US<br /></span>
                  <span className="info-item"><b>Co-Founder/Developer:</b> <a href="https://uvatour-df017cb90170.herokuapp.com/users/accounts/login/">UVA Tour</a></span>
                </p>
              </div>
              <div className="profile-links">
                <p>
                  <span className="info-item"><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/suson-sapkota-021227239/">susonsapkota</a><br /></span>
                  <span className="info-item"><b>GitHub:</b> <a href="https://github.com/suson7">suson</a><br /></span>
                  <span className="info-item"><b>Resume:</b> <a href="https://drive.google.com/file/d/1UkacASvzOH3NH5-KYzNML2KmdPeYs2DD/view">Download here!</a><br /></span>
                </p>
              </div>
            </div>
            <p>
              I am a fourth year student at the University of Virginia studying computer science. I have had a passion for computers and technology since 8th grade when I took my first ever coding class. I am very passionate about modern-day technologies especially Artificial Intelligence which is causing big transformation in the contemporary tech industry. I am excited to see what the future holds for tech and be part of this beautiful journey in the coming years.
            </p>
            <section id="skills" className="skills section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>SKILLS</h2>
    </div>
    <div className="row skills-content">
      <div className="col-lg-6 left-column">
        <div className="progress">
          <span className="skill">Python <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Java <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">C <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Agile <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Web Development <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Object Oriented <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">CircleCi <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: '55%' }}></div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 right-column">
        <div className="progress">
          <span className="skill">C++ <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Linux Env <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Playwright <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Jest <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Git and Github <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="progress">
          <span className="skill">Continuous Integration <i className="val"></i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: '85%' }}></div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>
          </div>
        </div>
      </div>

      <section id="documents" className="resume">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>RESUME</h2>
    </div>
   
    <div class="row">
      <div class="col-lg-6 summary-column">
        <h3 class="resume-title">Summary</h3>
        <div class="resume-item pb-0 no-line">
          <h4>Suson Sapkota</h4>
          <p><em>Passionate and dedicated Software developer with 4+ years of coding and software development experience.</em></p>
          <ul>
            <li>Herndon, VA, US</li>
            <li>sapkotasuson@gmail.com</li>
          </ul>
        </div>

        <h3 class="resume-title">Professional Experience</h3>
        <div class="resume-item">
          <h4>SDE/SWE Intern</h4>
          <h5>6/3/24-7/26/25</h5>
          <p><em>CareMetx LLC, Bethesda, VA</em></p>
          <ul>
            <li>Developed and implemented coding standards using Prettier, ESLint and other linting tools for the entire QA team. Integrated with CircleCI automating linting and formatting checks on every commit by scripting the CI pipeline.
</li>
            <li>Acquired proficiency in end-to-end testing with Playwright, creating robust test scripts for various web browsers, and integrating with CircleCI pipelines.

</li>
            <li> Developed skills in unit and integration testing with Jest, writing comprehensive test cases, and utilizing mocking and snapshot testing.

</li>
<li>Participated in daily standups with a team of four senior engineers and engaged in various meetings across the engineering department. Utilized Jira for efficient task management and project tracking within an Agile environment.

</li>
          </ul>
        </div>

        <div class="resume-item">
          <h4>Information Technology Intern</h4>
          <h5>January 2024 - May 2024</h5>
          <p><em>Charlottesville, VA, US</em></p>
          <ul>
            <li>Acquired proficiency in deploying and configuring F5 Network GTM (Global Traffic Managers) to improve website reliability and availability.       </li>
            <li>Enhanced the security infrastructure for over 20 clients by integrating Duo authentication with Cisco systems, resulting in a 30% increase in client security compliance within 4 months.
</li>
            <li>Played a pivotal role in configuring Cisco devices and implementing robust multi-factor authentication (MFA) policies to strengthen overall security measures.</li>
          </ul>
        </div>

        <div class="resume-item">
              <h4>Founder/ Developer</h4>
              <h5>Jun 2020 - Present</h5>
              <a href="https://uvatour-df017cb90170.herokuapp.com/users/accounts/login/"> <p><em> UVA TOUR</em></p> </a>
              <ul>
                <li>Co-founded a website for UVA students to tour campus virtually. Integrated Google Auth through the Gmail API for enhanced security and user authentication. Implemented Google Maps API for location services enabling seamless navigation through UVA's campus and showcasing popular tours around the University efficiently. Deployed on Heroku for consistent performance and easy access.
</li>
<li>Incorporated the MVC framework Django for structured development Used GitHub for streamlined version control and project management, executed short, focused sprints lasting 2-3 weeks, continuously enhancing the project for students
</li>

              </ul>
            </div>
      </div>
      

      

   
          <div class="col-lg-6">

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor's in Computer Science </h4>
              <h5>Aug 2021 -May 2025</h5>
              <h5>GPA: 3.5/4.0</h5>
              <p><em>University of Virginia, VA, US</em></p>
              <p>Program Coursework :</p> <p> Algorithms and Data Structure, Software Development, Discrete Maths,<br/> Computer Networks.</p>
            </div>
            <div class="resume-item">
              <h4>High School </h4>
              <h5>2017 - 2021</h5>
              <p><em>Yorktown High School, VA, US </em></p>
              </div>

          </div>
        </div>

      </div>
</section>



  {showBackToTop && (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
      ↑
    </button>
  )}
</div>
  );
}

export default App;
