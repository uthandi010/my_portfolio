import React from "react";
import { Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import "../new-styles.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Let's Connect!</h1>
        
        <div className="contact-links">
          {/* Instagram */}
          <a 
            href="https://instagram.com/uth_andi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link instagram"
          >
            <Instagram />
            <span>Instagram</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/+918778285621" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link whatsapp"
          >
            <MessageCircle />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/uthandi-p-a70377340" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:uthandi40@gmail.com" 
            className="contact-link email"
          >
            <Mail />
            <span>Email</span>
          </a>
        </div>

        <div className="contact-info">
          <p>Available for collaborations and opportunities</p>
          <p>Based in Your Location</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;