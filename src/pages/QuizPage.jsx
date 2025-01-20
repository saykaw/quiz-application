import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionCard from "../components/QuestionCard";
import NavigationPanel from "../components/NavigationPanel";
import { useNavigate } from "react-router-dom";

/**
This component renders the quiz interface, handling:
- Fetching questions from an external API.
- Navigating between questions.
- Selecting answers and tracking the user's progress.
- Managing a countdown timer.
- Submitting the quiz and navigating to the result page.
 */

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); 
  const navigate = useNavigate();


  /*
  Decodes HTML entities in a string to display formatted text.
  Example: "&amp;" becomes "&".
  */

  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  /*
  Effect for fetching quiz questions from the Open Trivia Database API.
  The questions are processed to include shuffled options and decoded text.
  */

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=15")
      .then((res) => {
        const formattedQuestions = res.data.results.map((q) => {
          const options = [...q.incorrect_answers, q.correct_answer];
          for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
          }
          return {
            question: decodeHTML(q.question),
            options: options.map(decodeHTML),
            correct_answer: decodeHTML(q.correct_answer),
          };
        });
        setQuestions(formattedQuestions);
      })
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  /*
  Effect for managing the countdown timer.
  Triggers quiz submission when the timer reaches zero.
  */
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
  };

  const handleSubmit = () => {
    navigate("/result", { state: { questions, answers } });
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (questions.length === 0) {
    return <div className="text-center mt-20 text-xl">Loading Questions...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
     
      <NavigationPanel
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        answers={answers}
        goToQuestion={goToQuestion}
      />

     
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Question {currentQuestionIndex + 1}/15</h2>
          <div className="text-lg font-bold text-red-600">
            Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </div>
        </div>

        <QuestionCard
          question={questions[currentQuestionIndex]}
          selectedAnswer={answers[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />

        <div className="flex justify-between mt-6">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;



