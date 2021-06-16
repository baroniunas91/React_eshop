import CartIcon from '../common/components/CartIcon';
// import CartNavItem from './components/CartNavItem';
import NavItem from './components/NavItem';

const navItems = [
  { content: 'PRODUCTS', route: '/' },
  { content: 'VISION', route: '/vision' },
  { content: 'CONTACTS', route: '/contacts' },
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
      {/* <CartNavItem /> */}
    </nav>
  );
}
export default NavBar;
