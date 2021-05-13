import NavItem from "./components/NavItem";

const navItems = [
    {text: 'PPRODUCTS', route: '/'},
    {text: 'VISION', route: '/vision'},
    {text: 'CONTACTS', route: '/contacts'}
];

function NavBar () {
    return (
        <nav className="bg-blue-400">
            <ul className="flex">
                {navItems.map(x => (
                <NavItem {...x}/>
                ))}
            </ul>
        </nav>
    )
}
export default NavBar;