import clsx from "clsx";

const defaultClasses = "bg-white border shadow p-2 flex flex-col";

function Card({ className, isRound, children }) {
  return (
    <div className={clsx(defaultClasses, isRound && "rounded", className)}>
      {children}
    </div>
  );
}

export default Card;
