import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Music sheets manager</h1>
           <Link to="/">Home</Link>
           <Link to="/sheets">Sheets</Link>

        </nav>
    );
}

export default Navbar;

