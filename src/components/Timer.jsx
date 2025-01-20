import { useEffect, useState } from "react";

const Timer = ({ onTimeUp }) => {
  const [time, setTime] = useState(1800); 

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return <div className="text-xl font-bold">Time Left: {formatTime(time)}</div>;
};

export default Timer;
