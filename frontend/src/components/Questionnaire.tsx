import { useEffect, useState } from 'react'
import sanityClient from '../../sanity/sanityClient'
import { useNavigate } from 'react-router-dom'

interface Question {
  question: string
  options: string[]
}

interface QuestionnairePage {
  title: string
  questions: Question[]
}

const Questionnaire = () => {
  const [data, setData] = useState<QuestionnairePage[]>([])
  const [pageIndex, setPageIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const navigate = useNavigate()

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "questionnaire"]{title, questions[]{question, options}}`)
      .then((res) => {
        console.log("✅ Data:", res)
        setData(res)
      })
      .catch((err) => console.error("Feil ved henting av data:", err))
  }, [])

  if (data.length === 0) return <p>Laster spørsmål...</p>

  const currentPage = data[pageIndex]
  const currentQuestion = currentPage.questions[questionIndex]

  const handleAnswer = (answer: string) => {
    const key = `${pageIndex}-${questionIndex}`
    setAnswers((prev) => ({ ...prev, [key]: answer }))
  }

  const next = () => {
    const isLastQuestion = questionIndex + 1 >= currentPage.questions.length
    const isLastPage = pageIndex + 1 >= data.length

    if (!isLastQuestion) {
      setQuestionIndex((prev) => prev + 1)
    } else if (!isLastPage) {
      setPageIndex((prev) => prev + 1)
      setQuestionIndex(0)
    } else {
      navigate('/summary', { state: { answers } })
    }
  }

  return (
    <div className="questionnaire-container">
      <h1>{currentPage.title}</h1>
      <h2>{currentQuestion.question}</h2>

      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              answers[`${pageIndex}-${questionIndex}`] === option ? 'selected' : ''
            }`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button className="next-button" onClick={next}>
        Neste →
      </button>
    </div>
  )
}

export default Questionnaire
