import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/Article.css";

const Article = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as {
    pageIndex: number;
    questionIndex: number;
    answers: { [key: string]: string };
  };

  const handleBack = () => {
    navigate("/questions", { state });
  };

  return (
    <div className="article-wrapper">
      <h1>Veiledning til kroppssammensetningsverktøyet</h1>

      <p>
        Dette er en oversikt over hva hvert spørsmål i verktøyet betyr og hvorfor det er viktig. Du kan lese gjennom alt, eller gå tilbake til spørreskjemaet.
      </p>

      <h2>Side 1 – Forberedende trinn</h2>
      <ul>
        <li><strong>Er utøveren over 18 år?</strong> Unge under 18 år er i vekst – måling frarådes uten medisinsk grunn.</li>
        <li><strong>Konkurrerer utøveren på høyt nivå?</strong> Kun toppidrettsutøvere bør vurderes.</li>
        <li><strong>Bekymringer rundt kroppsbilde/spiseatferd?</strong> Helse og trygghet må prioriteres.</li>
        <li><strong>Tilgang til fagteam?</strong> Måling krever oppfølging fra helsepersonell.</li>
        <li><strong>Godt begrunnet formål?</strong> Måling må ha nytteverdi og ikke skade.</li>
        <li><strong>Mentalt klar?</strong> Viktig å unngå belastning ved kroppsmisnøye.</li>
      </ul>

      <h2>Side 2 – Oppstart</h2>
      <ul>
        <li><strong>Er prosessen forklart?</strong> Utøveren skal forstå hensikt og metode.</li>
        <li><strong>Koblet til annen vurdering?</strong> Integrerte vurderinger er best.</li>
        <li><strong>Har alle fått opplæring?</strong> Både måler og støttepersoner.</li>
        <li><strong>Frivillighet er tydelig?</strong> Deltakelse skal være valgfritt.</li>
        <li><strong>Er det gitt samtykke?</strong> Skriftlig bekreftelse er nødvendig.</li>
      </ul>

      <h2>Side 3 – Valg av metode</h2>
      <ul>
        <li><strong>Er metoden passende?</strong> Målingen må være egnet for utøverens behov.</li>
        <li><strong>Kvalifisert person?</strong> Målingen må gjennomføres korrekt og faglig.</li>
      </ul>

      <h2>Side 4 – Datainnsamling</h2>
      <ul>
        <li><strong>Informasjon og forberedelse?</strong> Utøveren må vite hva som skjer.</li>
        <li><strong>Standardisert protokoll?</strong> Nøyaktighet krever faste rutiner.</li>
        <li><strong>Ledsager?</strong> Tilby trygghet ved behov.</li>
        <li><strong>Privat rom?</strong> Diskresjon og respekt er viktig.</li>
        <li><strong>Målefeil kjent?</strong> Viktig for tolkning.</li>
        <li><strong>Tilstrekkelig tid?</strong> Unngå hastverk og stress.</li>
        <li><strong>Sikret datahåndtering?</strong> Resultater er sensitive helsedata.</li>
      </ul>

      <h2>Side 5 – Tolkning</h2>
      <ul>
        <li><strong>Ikke umiddelbar presentasjon?</strong> Tolkning tar tid.</li>
        <li><strong>Helhetlig vurdering?</strong> Andre faktorer må med.</li>
      </ul>

      <h2>Side 6 – Rapportering</h2>
      <ul>
        <li><strong>Usikkerhet med?</strong> Tolkning må bygge på kvalitet.</li>
        <li><strong>Unngå normtall?</strong> Sammenligning kan gi feil fokus.</li>
      </ul>

      <h2>Side 7 – Deling og kommunikasjon</h2>
      <ul>
        <li><strong>Utøveren styrer deling?</strong> Personvern og kontroll.</li>
        <li><strong>Resultater deles privat?</strong> Trygt og profesjonelt.</li>
        <li><strong>Neste steg planlagt?</strong> Bruk målingen konstruktivt.</li>
      </ul>

      <h2>Side 8 – Overvåking</h2>
      <ul>
        <li><strong>Plan for videre målinger?</strong> Må være faglig begrunnet.</li>
        <li><strong>Ikke for ofte?</strong> Overvåk med fornuft.</li>
        <li><strong>Fortsatt oppfølging?</strong> Må ikke stå alene.</li>
        <li><strong>Ny vurdering av mental klarhet?</strong> Sikkerhet først.</li>
      </ul>

      <button className="back-btn" onClick={handleBack}>← Tilbake til spørsmål</button>
    </div>
  );
};

export default Article;