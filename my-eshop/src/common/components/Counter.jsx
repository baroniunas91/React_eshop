import Button from './Button';

const btnClasses =
  'transform scale-100 hover:-translate-y-0.5 active:translate-y-0.5 transition';

function Counter({ className, count, onIncrement, onDecrement, onInput }) {
  return (
    <div className={className}>
      <Button className={btnClasses} onClick={onDecrement}>
        -
      </Button>
      <input
        className="w-9 text-center px-2 py-1 outline-none"
        type="number"
        value={count}
        onChange={onInput}
      />
      <Button className={btnClasses} onClick={onIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
