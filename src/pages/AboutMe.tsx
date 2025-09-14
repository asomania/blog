import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Hello, I'm <span className="highlight">Eren</span>
          </h1>
          <h2>Software Developer</h2>
          <div className="scrolling-text">
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Vue.js</span>
            <span>C#</span>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-frame">
            <img src="avatar.jpg" alt="Profile Photo" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <h3>About Me</h3>
        <p>
          Hello, I'm Eren Küçük. My interest in programming started in my
          childhood, but I transformed this interest into a professional passion
          a few years ago. I focused on frontend development and producing
          user-focused, clean code projects. I pay attention to creating
          user-focused, clean code projects.
        </p>
        <p>
          With 1.5 years of professional experience, I worked on both individual
          and team projects; I developed simple, fast and accessible interfaces.
          Although I'm strong on the frontend side, I've recently started to get
          interested in data analysis and other aspects of software. I see
          software engineering as more than just a profession, but as a
          versatile field of production.
        </p>
        <p>
          Among my dreams are starting my own business, achieving financial
          freedom and traveling the world. In my free time, I follow
          technological developments, learn new things and try to develop myself
          in different areas. This blog page exists both to share what I've
          learned and to record my journey.
        </p>
      </div>
      {/* Skills Section */}
      <div className="skills-section">
        <h3>My Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend</h4>
            <ul>
              <li>Vue.js & Nuxt</li>
              <li>React.js & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS / SCSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Data & Others</h4>
            <ul>
              <li>Python (Pandas, NumPy)</li>
              <li>SQL</li>
              <li>Web Scraping</li>
              <li>Basic Data Visualization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3>Contact</h3>
        <div className="contact-methods">
          <a href="mailto:ornek@email.com" className="contact-item">
            <span className="icon">✉️</span>
            <span>erenkucuk2002@gmail.com</span>
          </a>
          <a href="https://github.com/kullaniciadi" className="contact-item">
            <span className="icon">👨‍💻</span>
            <span>github.com/asomania</span>
          </a>
          <a
            href="https://linkedin.com/in/kullaniciadi"
            className="contact-item"
          >
            <span className="icon">🔗</span>
            <span>linkedin.com/in/eren-kucuk</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
