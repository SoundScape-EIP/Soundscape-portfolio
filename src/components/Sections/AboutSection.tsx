import React from 'react';
import './Sections.css';

const AboutSection: React.FC = () => {
  return (
    <>
      <section id="about" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>
              Soundscape: Your Geolocated Music App
            </h2>
            <p>
              Soundscape transforms your movements into an immersive musical experience. As you explore different neighborhoods, you'll automatically listen to music associated with those areas, creating a dynamic soundtrack for your environment.
            </p>
          </div>
        </div>
      </section>

      <section id="about-features" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>Key Features: Events, Collection & Community</h2>
            <p>
              Dive into geolocated music with automatic playback tied to visited neighborhoods. Discover and create timely musical events (a premium feature for users!). Collect tracks like trophies and vote to associate your favorite songs with specific areas.
            </p>
          </div>
        </div>
      </section>

      <section id="about-community" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>Interactive Exchange & Discovery</h2>
            <p>
              Exchange music with fellow users and explore their tastes through public profiles. Our interactive map lets you visualize musical zones and real-time events, with intuitive navigation to enhance your discovery.
            </p>
          </div>
        </div>
      </section>

      <section id="about-audience" className="section">
        <div className="about-content">
          <div className="about-text-container">
            <h2>User Roles & Technology</h2>
            <p>
              Standard users enjoy core features like listening, collecting, and voting. Premium users can create events, access exclusive content, and enjoy an ad-free experience. Ambassadors act as playlist curators with early access to new features. Our technology focuses on precise geolocation for music triggering, real-time sync for votes and exchanges, and optimized performance for seamless musical transitions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;