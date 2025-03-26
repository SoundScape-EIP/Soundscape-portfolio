import React from 'react';
import './Sections.css';

const AboutSection: React.FC = () => {
  return (
    <>
      <section id="about" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>
              Soundscape is revolutionizing the way we discover and share music. 
              Breaking free from traditional algorithms, we're creating a community-driven 
              platform that connects people through music in their local neighborhoods.
            </h2>
          </div>
        </div>
      </section>

      <section id="about-features" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>
              Using geolocation, we enable users to explore, collect, and share music 
              within their communities. Discover new tracks as you explore different 
              neighborhoods, collect musical trophies, and trade with other music enthusiasts.
            </h2>
          </div>
        </div>
      </section>

      <section id="about-community" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>
              We believe in the power of human connection. Our platform encourages real 
              interactions, allowing users to shape the musical landscape of their areas 
              through suggestions and votes.
            </h2>
          </div>
        </div>
      </section>

      <section id="about-audience" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>
              Whether you're a music lover seeking new sounds, someone looking to connect 
              with others, or an artist wanting to reach new audiences, Soundscape is 
              your platform for musical discovery and community.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;