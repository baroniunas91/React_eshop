import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  }

  function handleInput(event) {
    setCount(parseInt(event.target.value));
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={count} onChange={handleInput} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
