import React, { useEffect, useState } from "react";
import sanityClient from "../../sanity/sanityClient";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../Style/Questionnaire.css";

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

const Questionnaire = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language as Lang;

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "questionnaire"] | order(order asc){
          title,
          questions[]{
            question,
            options[]{
              label,
              value,
              responseType,
              feedback,
              articleUrl
            }
          }
        }`
      )
      .then((res: Page[]) => setPages(res))
      .catch((err) => console.error("Feil ved henting fra Sanity:", err));
  }, []);

  if (!pages.length) return <p>Laster spørsmål...</p>;

  const currentPage = pages[pageIndex];
  const currentQuestion = currentPage.questions[questionIndex];
  const key = `${pageIndex}-${questionIndex}`;

  const handleAnswer = (option: Option) => {
    setAnswers((prev) => ({ ...prev, [key]: option.value }));
    setSelectedOption(option);
  };

  const next = () => {
    setSelectedOption(null);
    const isLastQuestion = questionIndex + 1 >= currentPage.questions.length;
    const isLastPage = pageIndex + 1 >= pages.length;

    if (!isLastQuestion) {
      setQuestionIndex((prev) => prev + 1);
    } else if (!isLastPage) {
      setPageIndex((prev) => prev + 1);
      setQuestionIndex(0);
    } else {
      navigate("/summary", { state: { answers, pages } });
    }
  };

  const prev = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    } else if (pageIndex > 0) {
      setPageIndex((prev) => prev - 1);
      setQuestionIndex(pages[pageIndex - 1].questions.length - 1);
    }
  };

  const totalQuestions = pages.reduce(
    (acc, page) => acc + page.questions.length,
    0
  );

  const currentIndex =
    pages
      .slice(0, pageIndex)
      .reduce((acc, page) => acc + page.questions.length, 0) +
    questionIndex +
    1;

  const progressPercent = (currentIndex / totalQuestions) * 100;

  return (
    <div className="questionnaire-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercent}%` }} />
      </div>

      <h1>{currentPage?.title?.[lang] ?? "Uten tittel"}</h1>
      <h2>
        {lang === "nb" ? "Spørsmål" : "Question"} {questionIndex + 1}{" "}
        {lang === "nb" ? "av" : "of"} {currentPage?.questions?.length ?? 0}
      </h2>

      <p className="question-instruction">
        {lang === "nb"
          ? "Før en vurdering av kroppssammensetning gjennomføres, svar på følgende spørsmål:"
          : "Before a body composition assessment is conducted, answer the following questions:"}
      </p>

      <div className="question-text">
        {currentQuestion?.question?.[lang] ?? "Uten spørsmålstekst"}
      </div>

      <div className="options">
        {currentQuestion?.options?.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className={`option-button ${
              selectedOption?.value === option.value
                ? `selected ${option.responseType}`
                : ""
            }`}
          >
            {option?.label?.[lang] ?? option.value}
          </button>
        ))}
      </div>

      {selectedOption?.feedback?.[lang] && (
        <div className={`feedback-box ${selectedOption.responseType}`}>
          <strong>{selectedOption.feedback[lang]}</strong>
          {selectedOption.articleUrl && (
            <a
              href={selectedOption.articleUrl}
              className="read-more-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "nb" ? "Les mer" : "Read more"}
            </a>
          )}
        </div>
      )}

      <div className="navigation-buttons">
        <button
          onClick={prev}
          className="nav-icon-btn"
          disabled={pageIndex === 0 && questionIndex === 0}
        >
          <FaArrowLeft />
        </button>
        <button onClick={next} className="nav-icon-btn" disabled={!selectedOption}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
