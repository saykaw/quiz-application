import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();
  const { questions, answers } = state;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <p dangerouslySetInnerHTML={{ __html: q.question }} />
          <p>
            Your Answer:{" "}
            <span className={answers[index] === q.correct_answer ? "text-green-600" : "text-red-600"}>
              {answers[index]}
            </span>
          </p>
          <p>Correct Answer: {q.correct_answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultPage;
