import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface Question {
  text: string;
  options: string[];
}

interface Page {
  title: string;
  questions: Question[];
}

const warningMessages: { [key: string]: string } = {
  "Nei": "\u26D4 Uten tilgang til støtteapparatet anbefales ikke kroppssammensetningsmålinger.",
  "Delvis": "\u26A0 Delvis anbefaling - vær forsiktig."
};

const Questionnaire: React.FC = () => {
  const [questions, setQuestions] = useState<Page[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/questions.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("✅ JSON lastet inn:", data);
        setQuestions(data.pages);
      })
      .catch((error) => console.error("❌ Feil ved lasting av JSON:", error));
  }, []);

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const page = questions[currentPage];
  const question = page.questions[currentQuestion];
  const selectedAnswer = answers[`${currentPage}-${currentQuestion}`] || "";

  console.log("📝 Nåværende spørsmål:", question);

  if (!question || !question.text) {
    return <div>❌ Feil: Ingen spørsmål funnet!</div>;
  }

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [`${currentPage}-${currentQuestion}`]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < page.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentPage + 1 < questions.length) {
      setCurrentPage(currentPage + 1);
      setCurrentQuestion(0);
    } else {
      navigate("/summary", { state: { answers } });
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setCurrentQuestion(questions[currentPage - 1].questions.length - 1);
    }
  };

  return (
    <div className="questionnaire-page">
      <div className="questionnaire-container">
        <h2 style={{ color: "black" }}>{page.title}</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${((currentPage * 10 + (currentQuestion + 1)) / (questions.length * 10)) * 100}%` }}></div>
        </div>
        <h3 style={{ color: "black" }}>Spørsmål {currentQuestion + 1} av {page.questions.length}</h3>
        <p className="question-text" style={{ color: "black" }}>{question.text}</p>
        <div className="options">
          {question.options.map((option, index) => (
            <button 
              key={index} 
              className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`} 
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer && warningMessages[selectedAnswer] && (
          <div className={`warning-box ${selectedAnswer === "Nei" ? "red" : "yellow"}`}>
            {warningMessages[selectedAnswer]}
          </div>
        )}
        <div className="navigation">
          {currentPage > 0 || currentQuestion > 0 ? (
            <button className="nav-btn" onClick={prevQuestion}>←</button>
          ) : null}
          <button className="nav-btn" onClick={nextQuestion}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
