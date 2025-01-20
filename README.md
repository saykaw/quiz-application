# Overview
The Quiz Application allows users to take a timed quiz with 15 randomly fetched questions from the Open Trivia Database. Users can navigate through the questions, answer them, and view their score upon completion. The application features a navigation panel, a countdown timer, and displays a results page with the user's score and detailed answers.

# Key features 
Timed Quiz: The quiz lasts for 30 minutes, with a countdown timer.
Navigation Panel: Allows users to quickly jump to any question.
Answer Feedback: Shows users whether their answer was correct or not after submitting the quiz.
Results Page: Displays the user's score out of the total questions, as well as a detailed report on each question.

# Components
QuizPage: This page handles the main quiz interface. It displays each question with multiple-choice answers, allows users to navigate through the questions, and submits the quiz when finished.
NavigationPanel: Displays a set of buttons for each question that lets the user navigate quickly to any question.
QuestionCard: Displays each question with its possible answers, allowing the user to select one answer.
ResultPage: After the quiz is submitted, this page shows the user's score and provides detailed feedback on each question.

# Setup 
1. Clone the repo: https://github.com/saykaw/quiz-application.git
2. cd <repository-name>
3. npm install
4. npm run dev

# Assumptions
1. The application assumes that the Open Trivia Database API will be available and accessible without any authentication.

# Challenges Faced and How They Were Overcome
1. Timer Implementation: Implementing a countdown timer that triggers the quiz submission when it reaches zero was tricky. I used the setInterval function to decrease the timer every second, and cleaned up the interval when the component unmounts or the timer finishes.

2. Navigation Between Questions: Ensuring that users could freely navigate between questions without losing their previous answers required careful state management. I utilized React's useState to track the user's selected answers and the current question index.

# Technologies used
React
Taiwlind CSS
React Router


