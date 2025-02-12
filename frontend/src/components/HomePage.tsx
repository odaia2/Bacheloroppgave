import React from "react";

const HomePage = () => {
  return (
    <main className="info-section">
      <h2>Hvordan fungerer det?</h2>
      <ul>
        <li>✅ Verktøyet er delt inn i <strong>8 Trinn</strong> med spørsmål.</li>
        <li>✅ Hvert trinn har spørsmål med svaralternativer: <strong>Ja, Nei, Delvis</strong>.</li>
        <li>
          ✅ Fargekoder: 
          <span style={{ color: "green" }}> Grønn</span> (fortsett), 
          <span style={{ color: "orange" }}> Gul</span> (forsiktig), 
          <span style={{ color: "red" }}> Rød</span> (stopp).
        </li>
        <li>⚠️ <strong>Viktig:</strong> Noen ganger anbefales det ikke å fortsette målingen.</li>
      </ul>
      <button className="start-btn">Start nå</button>
    </main>
  );
};

export default HomePage;
