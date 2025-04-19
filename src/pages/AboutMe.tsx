import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Merhaba, Ben <span className="highlight">Eren</span>
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
            <img src="avatar.jpg" alt="Profil Fotoğrafı" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <h3>Hakkımda</h3>
        <p>
          Merhaba, ben Eren Küçük. Yazılıma olan ilgim çocukluk yıllarıma
          dayanıyor ama bu ilgiyi profesyonel bir tutkuya dönüştürmem son birkaç
          yıl içinde gerçekleşti. Web teknolojileri alanında özellikle ön yüz
          geliştirme üzerine yoğunlaştım ve kullanıcı odaklı, temiz kodlu
          projeler üretmeye özen gösteriyorum.
        </p>
        <p>
          1.5 yılı aşkın profesyonel tecrübem boyunca hem bireysel hem ekip
          projelerinde çalıştım; sade, hızlı ve erişilebilir arayüzler
          geliştirdim. Frontend tarafında güçlü olsam da son zamanlarda veri
          analizi ve yazılımın diğer yönleriyle de ilgilenmeye başladım. Yazılım
          mühendisliğini bir meslekten öte, çok yönlü bir üretim alanı olarak
          görüyorum.
        </p>
        <p>
          Hayallerim arasında kendi işimi kurmak, finansal özgürlüğe ulaşmak ve
          dünyayı gezmek var. Boş zamanlarımda teknolojik gelişmeleri takip
          ediyor, yeni şeyler öğreniyor ve kendimi farklı alanlarda geliştirmeye
          çalışıyorum. Bu blog sayfası da hem öğrendiklerimi paylaşmak hem de
          yolculuğumu kayıt altına almak için var.
        </p>
      </div>
      {/* Skills Section */}
      <div className="skills-section">
        <h3>Yeteneklerim</h3>
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
            <h4>Veri & Diğer</h4>
            <ul>
              <li>Python (Pandas, NumPy)</li>
              <li>SQL</li>
              <li>Web Scraping</li>
              <li>Temel Veri Görselleştirme</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tasarım</h4>
            <ul>
              <li>Figma ile Arayüz Tasarımı</li>
              <li>Temel UI/UX Bilgisi</li>
              <li>Mobil Öncelikli Tasarım</li>
              <li>Prototip Oluşturma</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h3>İletişim</h3>
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
