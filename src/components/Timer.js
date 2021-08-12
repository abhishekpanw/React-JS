import React, { useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    setCount(count + 1)
  }

  return (
    <div>
      <h1> {count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Timer;


