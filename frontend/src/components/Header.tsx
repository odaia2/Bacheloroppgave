import React from "react";

import "../Style/Header.css"; // sørg for at du har denne filen

const Header = () => {
  const scrollToSection = () => {
    const section = document.getElementById("homepage");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hero-section">
      <div className="header-content">
        <div className="hero-text">
          <h1>
            Velkommen til verktøyet for vurdering av kroppssammensetning i idrett!
          </h1>
          <p>
            Dette verktøyet er utviklet for å hjelpe deg med å navigere og implementere beste
            praksis for vurdering av kroppssammensetning i idrett. Verktøyet fungerer som en støtte
            i dine faglige samtaler og beslutningsprosesser, og er ment å supplere – ikke erstatte –
            dialogen med relevante fagpersoner.
          </p>
        </div>
        <div className="hero-image" />
      </div>
      <button className="scroll-btn" onClick={scrollToSection}>
        Hvordan fungerer det? ⬇
      </button>
    </header>
  );
};

export default Header;
