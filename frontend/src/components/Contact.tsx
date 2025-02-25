import React from "react";
import "../Style/Contact.css"; // Importer CSS-filen

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Kontakt info</h2>
        <p>📞 <span className="contact-info">909 22 909</span></p>
        <p>📧 <span className="contact-info">feilmelding@BC.com</span></p>

        <h2>Send oss melding</h2>
        <form className="contact-form">
          <input type="email" placeholder="E-mail" required />
          <textarea placeholder="Melding" required></textarea>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
