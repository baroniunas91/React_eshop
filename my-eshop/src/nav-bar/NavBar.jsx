import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="bg-blue-400">
            <ul className="flex">
                <li className="p-2 text-xl font-semibold hover:text-white">
                    <Link to ="/">PRODUCTS</Link>
                </li>
                <li className="p-2 text-xl font-semibold hover:text-white">
                    <Link to ="/vision">VISION</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;