import React, { useState, useEffect } from 'react';
import './game.css'

const distractionsText = [
  "Check Instagram!",
  "New Notification!",
  "Free Gift!",
  "Urgent Email!",
  "Click to Win!"
];

function getRandomPattern(length = 6) {
  const chars = 'ABCDEF';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

function Distraction({ text }) {
  const randomStyle = {
    position: 'absolute',
    top:` ${Math.random() * 80}% `,
    left:` ${Math.random() * 80}% `,
    backgroundColor: 'red',
    color: 'white',
    padding: '20px',
    borderRadius: '5px',
    animation: 'shake 1s infinite'
  };

  return <div style={randomStyle}>{text}</div>;
}

function FocusGame() {
  const [pattern, setPattern] = useState(getRandomPattern());
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('highScore')) || 0;
  });
  const [distractions, setDistractions] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);

  const checkAnswer = () => {
    if (input.toUpperCase() === pattern) {
      setScore(score + 10);
    } else {
      alert('Wrong! Stay focused!');
      setScore(0);
    }
    setInput('');
    setPattern(getRandomPattern());
  };

  const endGame = () => {
    setIsGameOver(true);

    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }

    if (score <= 20) {
      setFeedback('Your focus is low');
    } else if (score <= 60) {
      setFeedback('Your focus is intermediate');
    } else {
      setFeedback('Your focus is high');
    }
  };

  const resetGame = () => {
    setScore(0);
    setPattern(getRandomPattern());
    setInput('');
    setIsGameOver(false);
    setFeedback('');
    setTimeLeft(60);
    setDistractions([]);
  };

  useEffect(() => {
    if (isGameOver) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameOver]);

  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      const newDistraction = distractionsText[Math.floor(Math.random() * distractionsText.length)];
      setDistractions((prev) => [...prev, { id: Date.now(), text: newDistraction }]);
      setTimeout(() => {
        setDistractions((prev) => prev.slice(1));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, [isGameOver]);

  return (
    <div className="game-container" style = {{"height" : "100vh"}}>
      <h1>TEST YOUR FOCUS</h1>

      {isGameOver ? (
        <>
          <h2>Game Over</h2>
          <p>Your final score: {score}</p>
          <p>High Score: {highScore}</p>
          <h3>{feedback}</h3>
          <button onClick={resetGame}>Play Again</button>
        </>
      ) : (
        <>
          <p>Time left: <strong>{timeLeft}s</strong></p>
          <p>Memorize this pattern: <strong>{pattern}</strong></p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Repeat the pattern"
          />
          <button onClick={checkAnswer}>Submit</button>
          <button onClick={endGame} style={{ marginLeft: '10px', backgroundColor: '#e74c3c' }}>End Game</button>
          <p>Score: {score}</p>
          <p>High Score: {highScore}</p>

          {distractions.map(d => (
            <Distraction key={d.id} text={d.text} />
          ))}
        </>
      )}
<br></br>
      <p><div>Note: if time runs out on you, then your focus is still low. You must click the "End Game" button</div></p>
    </div>
  );
}

export default FocusGame;