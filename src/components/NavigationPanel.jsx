import React from "react";

const NavigationPanel = ({ questions, currentQuestionIndex, answers, goToQuestion }) => {
  return (
    <div className="w-full lg:w-1/4 bg-gray-100 p-4 border-r border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Question Navigation</h2>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((_, index) => {
          // Determine button color based on visited/attempted status
          const isVisited = currentQuestionIndex === index;
          const isAnswered = answers[index] !== undefined;

          let buttonStyle = "bg-gray-300";
          if (isAnswered) buttonStyle = "bg-green-400 hover:bg-green-500";
          else if (isVisited) buttonStyle = "bg-yellow-300 hover:bg-yellow-400";

          return (
            <button
              key={index}
              onClick={() => goToQuestion(index)}
              className={`w-10 h-10 rounded ${buttonStyle} text-white font-bold`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationPanel;
