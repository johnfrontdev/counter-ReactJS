import React, { useEffect, useState } from "react";
import '../styles/Clock.css';
import '../styles/Responsive.css';

const Clock = () => {
  const [time, setTime] = useState("");

  const formatTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const paddedHours = hours < 10 ? "0" + hours : hours;
    const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const paddedSeconds = seconds < 10 ? "0" + seconds : seconds;
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock">
      <p>{time}</p>
    </div>
  );
};

export default Clock;
