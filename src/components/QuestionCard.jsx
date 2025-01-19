import React from "react";

const QuestionCard = ({ question, selectedAnswer, handleAnswer }) => {
  // Safely check if options exist
  const options = question?.options || [];

  if (options.length === 0) {
    return (
      <div className="text-center text-red-500">
        <p>Options not available. Something went wrong.</p>
      </div>
    );
  }

  return (
    <div className="question-card p-4 border border-gray-300 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">{question?.question}</h3>
      <div className="options space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={`w-full p-2 text-left rounded border ${
              selectedAnswer === option
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
