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
    <div className="mb-4">
      <button
        className="bg-white border w-8 hover:bg-gray-200"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className="w-8 text-center pl-2"
        readOnly
        type="number"
        value={count}
        onChange={handleInput}
      />
      <button
        className="bg-white border w-8 hover:bg-gray-200"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
