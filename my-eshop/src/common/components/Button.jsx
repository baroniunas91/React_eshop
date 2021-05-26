import clsx from "clsx"
import { Link } from "react-router-dom";

const defaultClasses = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none';

function Button({children, className, to}) {
    const mergedClasses = clsx(defaultClasses, className);
    if(to) {
        return <Link to={to} className={mergedClasses}>{children}</Link>
    }
    return (
        <button className={mergedClasses}>{children}</button>
    )
}

export default Button