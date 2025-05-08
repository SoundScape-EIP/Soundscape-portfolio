import React, { useState } from 'react';
import './Sections.css';

const WaitlisttSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // For user feedback

  const handleSubmit = async () => {
    setMessage(''); // Clear previous messages
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    try {
      const response = await fetch('/api/addToWaitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Successfully joined the waitlist!');
        setEmail(''); // Clear the input field on success
      } else {
        setMessage(data.message || 'Failed to join the waitlist. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Join the Waitlist</h2>
      <div className="waitlist-form">
        <input 
          type="email" 
          placeholder="email" 
          className="waitlist-input" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="minimal-button" onClick={handleSubmit}>Join</button>
        <div className="contact-container">
          <a href="mailto:contact@soundscape.com" className="contact-link">Contact Us</a>
        </div>
      </div>
      {message && <p className="waitlist-message">{message}</p>} {/* Display feedback message */}
    </section>
  );
};

export default WaitlisttSection;