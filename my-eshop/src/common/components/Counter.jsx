import { useState } from 'react';
import Button from './Button';

const btnClasses =
  'transform scale-100 hover:-translate-y-0.5 active:translate-y-0.5 transition';

function Counter({ className }) {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    // setCount(count + 1);
    setCount((prevCount) => parseInt(prevCount + 1));
  }

  function handleDecrement() {
    // setCount(count - 1);
    if (count === 1) {
      setCount(1);
    } else {
      setCount((prevCount) => parseInt(prevCount - 1));
    }
  }

  function handleInput(event) {
    const val = event.target.valueAsNumber;
    if (isNaN(val)) {
      setCount('');
    } else {
      setCount(event.target.valueAsNumber);
    }
  }

  return (
    <div className={className}>
      <Button className={btnClasses} onClick={handleDecrement}>
        -
      </Button>
      <input
        className="w-9 text-center px-2 py-1 outline-none"
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
