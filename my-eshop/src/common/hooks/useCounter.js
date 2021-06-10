import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(1);

  function onIncrement() {
    // setCount(count + 1);
    setCount((prevCount) => parseInt(prevCount + 1));
  }

  function onDecrement() {
    // setCount(count - 1);
    if (count === 1) {
      setCount(1);
    } else {
      setCount((prevCount) => parseInt(prevCount - 1));
    }
  }

  function onInput(event) {
    const val = event.target.valueAsNumber;
    if (isNaN(val)) {
      setCount('');
    } else {
      setCount(event.target.valueAsNumber);
    }
  }

  return {
    count,
    onIncrement,
    onDecrement,
    onInput,
  };
}

export default useCounter;
