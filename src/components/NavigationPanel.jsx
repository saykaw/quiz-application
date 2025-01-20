import React from "react";

/** 
This component displays a navigation panel that allows users to quickly navigate
between quiz questions. It highlights the current question and indicates which 
questions have already been answered.

Working - It dynamically generates these buttons based on the `questions` array, highlights the current question with a unique style (`isVisited` state), and marks answered questions with a distinct style (`isAnswered` state).
The buttons are displayed in a grid layout for better organization. The component handles button click events to invoke the `goToQuestion` function, allowing the parent component to update the currently displayed question.

Props:
- questions: Array of quiz questions.
- currentQuestionIndex: Index of the currently displayed question.
- answers: Object storing user answers with question indices as keys.
- goToQuestion: Function to navigate to a specific question.
 */

const NavigationPanel = ({ questions, currentQuestionIndex, answers, goToQuestion }) => {
  return (
    <div className="w-full lg:w-1/4 bg-gray-100 p-4 border-r border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Navigation</h2>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((_, index) => {
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
