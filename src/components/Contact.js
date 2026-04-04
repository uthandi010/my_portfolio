import React from "react";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import "../new-styles.css";

const contactLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/uth_andi_jr?igsh=Ym94YzRzNmkyMHRs",
    icon: <Instagram size={18} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918778285621",
    icon: <MessageCircle size={18} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/uthandi-p-a70377340",
    icon: <Linkedin size={18} />,
  },
  {
    label: "Email",
    href: "mailto:uthandi40@gmail.com",
    icon: <Mail size={18} />,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-shell">
      <div className="section-frame contact-layout">
        <div className="contact-copy reveal reveal-delay-1">
          <div className="eyebrow">
            <Mail size={16} />
            Contact
          </div>
          <h2 className="section-title">Let's build something useful together.</h2>
          <p className="section-description">
            If you need a developer who can improve UI quality, implement
            features end-to-end, and care about how the final product feels, I'd
            be happy to connect.
          </p>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <Mail size={16} />
              <span>uthandi40@gmail.com</span>
            </div>
            <div className="contact-meta-item">
              <MapPin size={16} />
              <span>India</span>
            </div>
          </div>
        </div>

        <div className="contact-card reveal reveal-delay-2">
          <p className="contact-card-label">Preferred channels</p>
          <div className="contact-links-grid">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <span className="contact-link-icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="availability-card">
            <strong>Open to collaboration</strong>
            <p>
              Available for freelance work, product development, UI refreshes,
              and full-stack feature delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
