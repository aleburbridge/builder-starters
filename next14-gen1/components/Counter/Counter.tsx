"use client";
import React, { useState } from "react";
import './counterstyle.css'

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div >
      <button  onClick={decrement}>
        -
      </button>
      <span >{count}</span>
      <button onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
