import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Sections.css';
import img1 from '/img/img1.jpg?url';
import img2 from '/img/img2.jpg?url';
import img3 from '/img/img3.jpeg?url';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    textRefs.current.forEach((textRef) => {
      if (textRef) {
        gsap.fromTo(
          textRef,
          {
            y: -30,
          },
          {
            y: 30,
            ease: "power1.out",
            scrollTrigger: {
              trigger: textRef,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
              toggleActions: "play none none reverse",
              anticipatePin: 1,
              fastScrollEnd: true,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const setRef = (index: number) => (el: HTMLDivElement | null) => {
    textRefs.current[index] = el;
  };

  return (
    <>
      <section id="about" className="section">
        <div className="about-content">
          <div className="image-wrapper">
            <div className="image-container">
              <img src={img1} alt="About Soundscape" className="section-image" />
            </div>
          </div>
          <div className="text-wrapper">
            <div className="about-text-container" ref={setRef(0)}>
              <h2>
                Soundscape : Votre Application Musicale Géolocalisée
              </h2>
              <p>
                Soundscape transforme vos déplacements en une expérience musicale immersive. En explorant différents quartiers, vous écouterez automatiquement la musique associée à ces zones, créant une bande sonore dynamique pour votre environnement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-features" className="section">
        <div className="about-content reverse">
          <div className="image-wrapper">
            <div className="image-container">
              <img src={img2} alt="Key Features" className="section-image" />
            </div>
          </div>
          <div className="text-wrapper">
            <div className="about-text-container" ref={setRef(1)}>
              <h2>Fonctionnalités Clés : Événements, Collection & Communauté</h2>
              <p>
                Plongez dans la musique géolocalisée avec une lecture automatique liée aux quartiers visités. Découvrez et créez des événements musicaux opportuns (une fonctionnalité premium pour les utilisateurs !). Collectionnez des pistes comme des trophées et votez pour associer vos chansons préférées à des zones spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-community" className="section">
        <div className="about-content">
          <div className="image-wrapper">
            <div className="image-container">
              <img src={img3} alt="Interactive Exchange" className="section-image" />
            </div>
          </div>
          <div className="text-wrapper">
            <div className="about-text-container" ref={setRef(2)}>
              <h2>Échange Interactif & Découverte</h2>
              <p>
                Échangez de la musique avec d'autres utilisateurs et explorez leurs goûts à travers des profils publics. Notre carte interactive vous permet de visualiser les zones musicales et les événements en temps réel, avec une navigation intuitive pour améliorer votre découverte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-audience" className="section">
        <div className="about-content">
            <div className="about-text-container" ref={setRef(3)}>
              <h2>Rôles Utilisateur & Technologie</h2>
              <p>
                Les utilisateurs standard profitent des fonctionnalités principales comme l'écoute, la collection et le vote. Les utilisateurs premium peuvent créer des événements, accéder à du contenu exclusif et profiter d'une expérience sans publicité. Les ambassadeurs agissent comme des conservateurs de playlists avec un accès anticipé aux nouvelles fonctionnalités. Notre technologie se concentre sur la géolocalisation précise pour le déclenchement musical, la synchronisation en temps réel pour les votes et échanges, et des performances optimisées pour des transitions musicales fluides.
              </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;