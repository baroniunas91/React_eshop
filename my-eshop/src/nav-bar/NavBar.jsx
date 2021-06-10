import CartIcon from '../common/components/CartIcon';
import NavItem from './components/NavItem';

const navItems = [
  { text: 'PRODUCTS', route: '/' },
  { text: 'VISION', route: '/vision' },
  { text: 'CONTACTS', route: '/contacts' },
];
const cartRoute = '/cart';

function NavBar() {
  return (
    <nav className="bg-blue-400 flex justify-between">
      <ul className="flex">
        {navItems.map((x) => (
          <NavItem key={x.route} {...x} />
        ))}
      </ul>
      <CartIcon to={cartRoute} />
    </nav>
  );
}
export default NavBar;
