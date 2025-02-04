import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Music sheets manager</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/sheets">Sheets</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
    );
}

export default Navbar;

