import React, { useState, useEffect, useRef } from 'react';

const CounterTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPause, setIsPause] = useState(true);
  const [resetClicked, setResetClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const intervalRef = useRef(null);

  const handleInput = (e) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(value) && value >= 0)) {
      setInputValue(value);
      setTime(parseInt(value * 60) || 0);
      setResetClicked(false);
    }
  };

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    return `${min}:${sec}`;
  };

  const handleStart = () => {
    if (time > 0) {
      setIsActive(true);
      setIsPause(false);
    }
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && isActive) {
      clearInterval(intervalRef.current);
      setIsActive(false);

      if (!resetClicked) {
        alert('Timer is Completed');
      }
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time, resetClicked]);

  const handlePause = () => {
    setIsPause(!isPause);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPause(true);
    setResetClicked(true);
    setTime(0);
    setInputValue('');
    alert('Timer is Completed');
  };

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div className="timer-display">
        <input
          type="number"
          placeholder="Enter Time in Minutes"
          value={inputValue}
          onChange={handleInput}
        />
        <div>{formatTime()}</div>
      </div>
      <div className="timer-controls">
        <button onClick={handleStart} disabled={isActive && !isPause}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isActive}>
          {isPause ? 'Resume' : 'Pause'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterTimer;
