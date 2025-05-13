import { useEffect, useState } from "react";
import sanityClient from "../../sanity/sanityClient";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../Style/Questionnaire.css";

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

const Questionnaire = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "questionnaire"] | order(title asc){
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
      .then((res: Page[]) => {
        setPages(res);
      })
      .catch((err) => console.error("Feil ved henting:", err));
  }, []);

  if (!pages.length) return <p>Laster spørsmål...</p>;

  const currentPage = pages[pageIndex];
  const currentQuestion = currentPage.questions[questionIndex];
  const key = `${pageIndex}-${questionIndex}`;

  const handleAnswer = (option: Option) => {
    setAnswers((prev) => ({ ...prev, [key]: option.label }));
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

  return (
    <div className="questionnaire-container">

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{
            width: `${((questionIndex + 1) / currentPage.questions.length) * 100}%`,
          }}
        ></div>
      </div>


      <h1>{currentPage.title}</h1>
      <h2>{`Spørsmål ${questionIndex + 1} av ${currentPage.questions.length}`}</h2>

      <p className="question-instruction">
        Før en vurdering av kroppssammensetning gjennomføres, svar på følgende spørsmål:
      </p>

      <div className="question-text">{currentQuestion.question}</div>

      <div className="options">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option)}
            className={`option-button ${selectedOption?.value === option.value ? `selected ${option.responseType}` : ""}`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {selectedOption && (
        <div className={`feedback-box ${selectedOption.responseType}`}>
          <strong>{selectedOption.feedback}</strong>
          {selectedOption.articleUrl && (
            <a href={selectedOption.articleUrl} className="read-more-btn" target="_blank" rel="noopener noreferrer">
              Les mer
            </a>
          )}
        </div>
      )}

      <div className="navigation-buttons">
        <button onClick={prev} className="nav-icon-btn" disabled={pageIndex === 0 && questionIndex === 0}>
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
