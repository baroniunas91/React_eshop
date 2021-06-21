import { useContext } from 'react';
import NavItem from './NavItem';
import { ReactComponent as CartIconSvg } from '../../common/assets/shopping-cart.svg';
import { CartContext } from '../../common/providers/CartProvider';

function CartIconWithNo({ productCount }) {
  return (
    <>
      <CartIconSvg className="w-8 h-8" />
      {productCount && (
        <span
          className="absolute text-yellow-400 font-bold text-xs top-1/4"
          style={{ right: '35%' }}
        >
          {productCount}
        </span>
      )}
    </>
  );
}

function CartNavItem() {
  const { cart } = useContext(CartContext);

  return (
    <NavItem
      content={<CartIconWithNo productCount={cart?.products?.length} />}
      route="/cart"
      className="ml-auto mr-2 relative"
    />
  );
}

export default CartNavItem;
