// import { useLocation } from "react-router-dom";

// const ResultPage = () => {
//   const { state } = useLocation();
//   const { questions, answers } = state;

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
//       {questions.map((q, index) => (
//         <div key={index} className="mb-6">
//           <p dangerouslySetInnerHTML={{ __html: q.question }} />
//           <p>
//             Your Answer:{" "}
//             <span className={answers[index] === q.correct_answer ? "text-green-600" : "text-red-600"}>
//               {answers[index]}
//             </span>
//           </p>
//           <p>Correct Answer: {q.correct_answer}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResultPage;

import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();
  const { questions, answers } = state;

  // Calculate the score
  const score = questions.reduce((total, question, index) => {
    return total + (answers[index] === question.correct_answer ? 1 : 0);
  }, 0);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
      <h2 className="text-xl font-semibold mb-4">
        Your Score: {score}/{questions.length}
      </h2>

      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <p dangerouslySetInnerHTML={{ __html: q.question }} className="font-medium" />
          <p>
            Your Answer:{" "}
            <span className={answers[index] === q.correct_answer ? "text-green-600" : "text-red-600"}>
              {answers[index] || "No Answer"}
            </span>
          </p>
          <p>Correct Answer: <span className="font-semibold">{q.correct_answer}</span></p>
        </div>
      ))}
    </div>
  );
};

export default ResultPage;
