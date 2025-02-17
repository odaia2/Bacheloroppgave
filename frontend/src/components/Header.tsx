import React from "react";

const Header = () => {
  const scrollToSection = () => {
    const section = document.getElementById("homepage");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="hero-text">
        <h1>Velkommen til verktøyet for vurdering av kroppssammensetning i idrett!</h1>
        <p>
          Dette verktøyet er utviklet for å hjelpe deg med å navigere og implementere beste praksis for vurdering av kroppssammensetning i idrett.
        </p>
        <p>
          Verktøyet fungerer som en støtte i dine faglige samtaler og beslutningsprosesser, 
          og er ment å supplere – ikke erstatte – dialogen med relevante fagpersoner.
        </p>
      </div>
      <button className="scroll-btn" onClick={scrollToSection}>
        Hvordan fungerer det? ⬇
      </button>
    </header>
  );
};

export default Header;
