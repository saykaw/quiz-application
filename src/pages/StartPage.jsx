import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (email) {
      localStorage.setItem("userEmail", email);
      navigate("/quiz");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz!</h1>
      <input
        type="email"
        placeholder="Enter your email"
        className="p-3 w-80 rounded-md border border-gray-400 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleStart}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;
