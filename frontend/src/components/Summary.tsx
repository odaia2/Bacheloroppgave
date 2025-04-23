import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Style/Summary.css";
import "../Style/Style.css";

interface Option {
  label: string;
  value: string;
  responseType: "green" | "yellow" | "red";
  feedback: string;
  articleUrl?: string;
}

interface Question {
  question: string;
  options: Option[];
}

interface Page {
  title: string;
  questions: Question[];
}

interface LocationState {
  answers: { [key: string]: string };
  pages: Page[];
}

const Summary: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers, pages }: LocationState = location.state || {
    answers: {},
    pages: [],
  };

  return (
    <div className="summary-page">
      <div className="summary-wrapper">
        <h2>Oppsummering</h2>
        <p>
          Dette oppsummering gir en kort oversikt over svarene som er gitt.
          Modellen er laget for å gjøre det lettere å få tilgang til viktige
          informasjoner på en kortfattet og organisert måte.
        </p>

        {pages.map((page, pageIndex) => (
          <div className="summary-section" key={pageIndex}>
            <h3>{page.title}</h3>
            <ul>
              {page.questions.map((q, qIndex) => {
                const key = `${pageIndex}-${qIndex}`;
                const answer = answers[key];

                // Finn valgte alternativ
                const selectedOption = q.options.find(opt => opt.label === answer);
                const responseClass = selectedOption?.responseType || "";

                return (
                  <li key={qIndex}>
                    <strong>{qIndex + 1}.</strong> {q.question}
                    <div className={`user-answer ${responseClass}`}>→ {answer}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <button className="summary-home-button" onClick={() => navigate("/")}>
          Hjem
        </button>
      </div>
    </div>
  );
};

export default Summary;
