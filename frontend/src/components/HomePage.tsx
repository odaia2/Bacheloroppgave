import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const startQuestionnaire = () => {
    navigate("/velg-rolle"); // <-- Går til rolesiden først
  };

  return (
    <main id="homepage">
      <div className="info-container">
        {/* VENSTRE KOLONNE – kun overskrift */}
        <div className="left-column">
          <h2>Hvordan fungerer det?</h2>
        </div>

        {/* HØYRE KOLONNE – alt annet innhold */}
        <div className="right-column">
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
            <button className="start-btn" onClick={startQuestionnaire}>Start nå</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
