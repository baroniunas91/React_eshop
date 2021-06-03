import { useState } from 'react';
import Button from './Button';

const btnClasses =
  'transform scale-100 hover:-translate-y-0.5 active:translate-y-0.5 transition';

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
      <Button className={btnClasses} onClick={handleDecrement}>
        -
      </Button>
      <input
        className="w-9 text-center px-2 py-1 outline-none"
        readOnly
        type="number"
        value={count}
        onChange={handleInput}
      />
      <Button className={btnClasses} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
