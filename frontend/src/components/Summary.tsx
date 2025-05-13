import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Style/Summary.css";
import "../Style/Style.css";

type Lang = "nb" | "en";

interface Localized {
  nb?: string;
  en?: string;
}

interface Option {
  label: Localized;
  value: string;
  responseType: "green" | "yellow" | "red";
  feedback: Localized;
  articleUrl?: string;
}

interface Question {
  question: Localized;
  options: Option[];
}

interface Page {
  title: Localized;
  questions: Question[];
}

interface LocationState {
  answers: { [key: string]: string };
  pages: Page[];
}

const Summary: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language as Lang;

  const { answers, pages }: LocationState = location.state || {
    answers: {},
    pages: [],
  };

  return (
    <div className="summary-page">
      <div className="summary-wrapper">
        <h2>{lang === "nb" ? "Oppsummering" : "Summary"}</h2>
        <p>
          {lang === "nb"
            ? "Dette oppsummering gir en kort oversikt over svarene som er gitt."
            : "This summary gives a quick overview of the answers provided."}
        </p>

        {pages.map((page, pageIndex) => (
          <div className="summary-section" key={pageIndex}>
            <h3>
              {lang === "nb" ? "Side" : "Page"} {pageIndex + 1}:{" "}
              {page?.title?.[lang] ?? "Uten tittel"}
            </h3>
            <ul>
              {page.questions.map((q, qIndex) => {
                const key = `${pageIndex}-${qIndex}`;
                const answer = answers[key];

                const selectedOption = q.options.find(
                  (opt) => opt.value === answer
                );
                const label = selectedOption?.label?.[lang] ?? answer;
                const responseClass = selectedOption?.responseType ?? "";

                return (
                  <li key={qIndex}>
                    <strong>{qIndex + 1}.</strong>{" "}
                    {q.question?.[lang] ?? "Uten spørsmål"}
                    <div className={`user-answer ${responseClass}`}>
                      → {label}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <button className="summary-home-button" onClick={() => navigate("/")}>
          {lang === "nb" ? "Hjem" : "Home"}
        </button>
      </div>
    </div>
  );
};

export default Summary;
