import React from "react";
import "../Style/Style.css"; // Importerer CSS-filen

const HomePage = () => {
  return (
    <div>
      <nav>
        <div className="logo">Logo</div>
        <div>
          <a href="#">Ressurser</a>
          <a href="#">Kontakt oss</a>
          <button>🌍</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Velkommen til verktøyet for vurdering av kroppssammensetning i idrett!</h1>
          <p>
            Dette verktøyet hjelper deg med å navigere og implementere beste praksis
            for vurdering av kroppssammensetning i idrett.
          </p>
        </div>
      </div>

      {/* Informasjonseksjon */}
      <div className="info-section">
        <h2>Hvordan fungerer det?</h2>
        <ul>
          <li>✅ Verktøyet er delt inn i <strong>8 Trinn</strong> med spørsmål.</li>
          <li>✅ Hvert trinn har spørsmål med svaralternativer: <strong>Ja, Nei, Delvis</strong>.</li>
          <li>✅ Fargekoder: <span style={{ color: "green" }}>Grønn</span> (fortsett), <span style={{ color: "orange" }}>Gul</span> (forsiktig), <span style={{ color: "red" }}>Rød</span> (stopp).</li>
          <li>⚠️ <strong>Viktig:</strong> Noen ganger anbefales det ikke å fortsette målingen.</li>
        </ul>
        <button className="start-btn">Start nå</button>
      </div>
    </div>
  );
};

export default HomePage;
