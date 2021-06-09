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

const initialClasses = 'font-bold py-1 px-4 rounded focus:outline-none';

function Button({
  children,
  className,
  to,
  type = buttonTypes.DEFAULT,
  onClick,
}) {
  const mergedClasses = clsx(initialClasses, typeClassMap[type], className);
  if (to) {
    return (
      <Link to={to} className={mergedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button className={mergedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
