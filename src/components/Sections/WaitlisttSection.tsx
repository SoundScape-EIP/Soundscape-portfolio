import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Sections.css';

// Define constants for EmailJS credentials using environment variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const WaitlisttSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            setMessage('Successfully joined the waitlist!');
            setEmail(''); // Clear the input field on success
          },
          (error: { text: string }) => {
            console.error('FAILED...', error.text);
            setMessage('Failed to join the waitlist. Please try again.');
          },
        );
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Join the Waitlist</h2>
      <form ref={form} onSubmit={sendEmail} className="waitlist-form">
        <input
          type="email"
          name="user_email"
          placeholder="email"
          className="waitlist-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="minimal-button">Join</button>
        <div className="contact-container">
          <a href="mailto:contact@soundscape.com" className="contact-link">Contact Us</a>
        </div>
      </form>
      {message}
    </section>
  );
};

export default WaitlisttSection;