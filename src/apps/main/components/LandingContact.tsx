import React from 'react';
import { ContactForm } from './ContactForm';

interface Props {}

export const LandingContact = (props: Props) => {
  return (
    <div id="contact" className="container inner-page">
      <header className="page-title">
        <h1>Contact</h1>
      </header>

      <div className="section-row-split">
        <div className="contact-info">
          <img src="/images/site/call-room.jpg" alt="calling room" />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
