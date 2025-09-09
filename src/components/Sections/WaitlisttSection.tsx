import React, { useState } from 'react';
import './Sections.css';

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const joinWaitlist = async (email: string): Promise<void> => {
    const WAITLIST_ID = import.meta.env.VITE_WAITLIST_ID;
    
    const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        waitlist_id: WAITLIST_ID,
        referral_link: window.location.href,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to join waitlist');
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    if (!email) {
      setMessage('Veuillez saisir votre adresse e-mail.');
      return;
    }

    setIsLoading(true);

    try {
      await joinWaitlist(email);
      setMessage('Inscription à la liste d\'attente réussie !');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Échec de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Rejoignez la Liste d'Attente</h2>
      <form onSubmit={handleSubmit} className="waitlist-form">
        <input
          type="email"
          name="user_email"
          placeholder="Votre e-mail"
          className="waitlist-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="minimal-button"
          disabled={isLoading}
        >
          {isLoading ? 'Inscription...' : 'Rejoindre'}
        </button>
        <div className="contact-container">
          <a href="mailto:contact@soundscape.com" className="contact-link">Nous contacter</a>
        </div>
      </form>
      {message && (
        <div className={`waitlist-message ${message.includes('réussie') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
    </section>
  );
};

export default WaitlistSection;