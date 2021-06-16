import { ReactComponent as CartIconSvg } from '../assets/shopping-cart.svg';
import { Link } from 'react-router-dom';

function CartIcon({ to }) {
  return (
    <Link
      to={to}
      className="mr-3 my-1 py-0.5 px-1 flex items-center cursor-pointer hover:text-white rounded"
    >
      <CartIconSvg />
    </Link>
  );
}

export default CartIcon;
