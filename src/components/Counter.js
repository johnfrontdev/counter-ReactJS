import React, { useState } from "react";
import '../styles/Counter.css';
import '../styles/Responsive.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <p className="contador-atual">O valor atual do contador é <span className="counter-number">{count}</span></p>
      <div className="buttons-counter">
        <button className="green" onClick={increment}><span>+</span></button>
        <button className="red" onClick={decrement}><span>-</span></button>
        <button className="reset" onClick={reset}>RESET</button>
      </div>
    </div>
  );
};

export default Counter;
