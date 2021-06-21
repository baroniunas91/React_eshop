import NavItem from './NavItem';
import { ReactComponent as CartIconSvg } from '../../common/assets/shopping-cart.svg';

function CartNavItem() {
  return (
    <NavItem
      content={<CartIconSvg className="w-8 h-8" />}
      route="/cart"
      className="ml-auto mr-2"
    />
  );
}

export default CartNavItem;
