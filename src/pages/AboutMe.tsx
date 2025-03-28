import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className="about-container ibm-font">
      <h1>Hakkımda</h1>

      <div className="about-content">
        <div className="profile-section">
          <img
            src="avatar.jpg"
            alt="Profil Fotoğrafı"
            className="profile-image"
          />
          <h2>Merhaba, Ben [İsminiz]</h2>
        </div>

        <div className="info-section">
          <p>
            Ben bir yazılım geliştiricisiyim ve web teknolojilerine tutkuyla
            bağlıyım. React, TypeScript ve modern web teknolojileri üzerinde
            çalışmaktan keyif alıyorum.
          </p>

          <div className="skills">
            <h3>Yeteneklerim</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
            </ul>
          </div>

          <div className="contact">
            <h3>İletişim</h3>
            <p>Email: ornek@email.com</p>
            <p>GitHub: github.com/kullaniciadi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
