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
  documents: '#documents'
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

  // AOS Animation Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      {/* Navigation Menu */}
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
      <h2>Software Developer & QA Tester.</h2>
      <div className="info-row">
        <div className="info-content">
          <p>
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
            <span className="info-item"><b>Resume:</b> <a href="https://drive.google.com/file/d/1BsVA5S-WKtqEZF-Sd8Gb-F1hDeq7Oyl-/view">Download here!</a><br /></span>
          </p>
        </div>
      </div>
      <p>
        I am a  fourth year student at the University of Virginia studying computer science. I have had a passion for computers and technology since 8th grade when I took my first ever coding class. I am very passionate about <br /> modern-day techonologies especially  Artificial Intelligence which is causing big transformation in the contemorary tech industry. I am excited to see what the future holds for tech and be part of this beautiful journey in the coming years.
      </p>
      <div className="skills-header-container">
        <h2 className="skills-header">SKILLS</h2>
        </div>
    </div>
  </div>

</div>


      <div id='documents' className='section' data-aos='fade-up'>
        <h1>Documents</h1>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
          ↑
        </button>
      )}
    </div>
  );
}


export default App;