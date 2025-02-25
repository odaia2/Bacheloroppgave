import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/Style.css";

const Summary: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers: { [key: string]: string } = location.state?.answers || {};

  return (
    <div className="summary-page">
      <div className="summary-container">
        <h2>Oppsummering av undersøkelsen</h2>
        <ul>
          {Object.entries(answers).map(([key, value], index) => (
            <li key={index}>
              <strong>Spørsmål {key.replace("-", " ")}:</strong> {value}
            </li>
          ))}
        </ul>
        <button className="nav-btn" onClick={() => navigate("/")}>
          Hjem
        </button>
      </div>
    </div>
  );
};

export default Summary;
