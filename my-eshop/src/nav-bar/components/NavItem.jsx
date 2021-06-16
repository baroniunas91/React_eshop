import { Link } from 'react-router-dom';

function NavItem({ content, route }) {
  return (
    <li className="p-2 text-xl font-semibold hover:text-white">
      <Link to={route}>{content}</Link>
    </li>
  );
}

export default NavItem;
