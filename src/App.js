import React, { useState, useEffect } from "react";
import "./App.css"; // We'll create this file later

const Game = () => {
  const [score, setScore] = useState(0); // Track the score
  const [timeLeft, setTimeLeft] = useState(10); // 10-second timer
  const [position, setPosition] = useState({ top: 0, left: 0 }); // Button position

  // Function to move the button randomly
  const moveButton = () => {
    const maxWidth = window.innerWidth - 100; // Subtract button width
    const maxHeight = window.innerHeight - 100; // Subtract button height
    const newTop = Math.floor(Math.random() * maxHeight);
    const newLeft = Math.floor(Math.random() * maxWidth);
    setPosition({ top: newTop, left: newLeft });
  };

  // Function to handle button click
  const handleClick = () => {
    setScore(score + 1); // Increase score
    moveButton(); // Move the button
  };

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer); // Cleanup
    }
  }, [timeLeft]);

  // Reset game when time is up
  useEffect(() => {
    if (timeLeft === 0) {
      alert(`Game Over! Your score is ${score}.`);
      setScore(0); // Reset score
      setTimeLeft(10); // Reset timer
    }
  }, [timeLeft, score]);

  return (
    <div className="game-container">
      <h1>Click the Button Game</h1>
      <p>Time Left: {timeLeft} seconds</p>
      <p>Score: {score}</p>
      <button
        className="click-button"
        style={{ top: position.top, left: position.left }}
        onClick={handleClick}
      >
        Click Me!
      </button>
    </div>
  );
};

export default Game;