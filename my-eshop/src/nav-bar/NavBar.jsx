import CartNavItem from './components/CartNavItem';
import NavItem from './components/NavItem';

const navItems = [
  { content: 'PRODUCTS', route: '/' },
  { content: 'VISION', route: '/vision' },
  { content: 'CONTACTS', route: '/contacts' },
];

function NavBar() {
  return (
    <nav className="bg-blue-400">
      <ul className="flex">
        {navItems.map((x) => (
          <NavItem key={x.route} {...x} />
        ))}
        <CartNavItem />
      </ul>
    </nav>
  );
}
export default NavBar;
