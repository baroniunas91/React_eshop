function useCounter() {
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

  return {
    onIncrement,
    onDe,
  };
}

export default useCounter;
