import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const buttonTypes = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
};

const typeClassMap = {
  default: 'bg-blue-500 hover:bg-blue-700 text-white',
  primary: 'bg-green-500 hover:bg-green-700 text-white',
};

const disabledClasses = 'cursor-default bg-gray-300 text-gray-400';

const initialClasses = 'font-bold py-1 px-4 rounded focus:outline-none';

function Button({
  children,
  className,
  to,
  type = buttonTypes.DEFAULT,
  disabled,
  onClick,
}) {
  const mergedClasses = clsx(
    initialClasses,
    className,
    disabled ? disabledClasses : typeClassMap[type]
  );
  if (to) {
    return (
      <Link
        to={to}
        className={mergedClasses}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={mergedClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
export default Button;
