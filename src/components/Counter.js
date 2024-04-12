import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

return (
  <div>
    <h2>Counter</h2>
    <p>Count: {count}</p>
    <button onClick={increase}>Increment</button>
    <button onClick={decrease}>Decrement</button>
  </div>
);
}
export default Counter;