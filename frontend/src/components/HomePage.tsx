import React from "react";

const HomePage = () => {
  return (
    <main id="homepage">
      <div className="info-container">
        <h2>Hvordan fungerer det?</h2>
        <div className="info-content">
          <ul>
            <li>🔷 Verktøyet er delt inn i <strong>8 Trinn</strong> med spørsmål.</li>
            <li>🔷 Hvert trinn har spørsmål med svaralternativer: <strong>Ja, Nei, Delvis</strong>.</li>
            <li>
              🔷 Svarene dine fargekodes: 
              <span style={{ color: "green" }}> Grønn</span> (fortsett), 
              <span style={{ color: "orange" }}> Gul</span> (forsiktig), 
              <span style={{ color: "red" }}> Rød</span> (stopp).
            </li>
            <li>
              ⚠️ <strong>Viktig:</strong> Noen ganger anbefales det ikke å fortsette målingen. 
              Du får instruksjoner om nødvendige endringer før du går videre.
            </li>
          </ul>
          <p>
            Vi oppfordrer deg til å bruke dette verktøyet aktivt som en del av dine faglige samtaler
            og i beslutningsprosessen om kroppssammensetning i sport.
          </p>
          <p><strong>Når du er klar, trykk «Start nå» for å starte prosessen.</strong></p>
          <button className="start-btn">Start nå</button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
