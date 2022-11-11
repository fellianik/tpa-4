import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div>
            <nav>
                <h2 className="nav-logo">
                    <Link to={"/"} className="logo-link">
                        Felliani Kurniawati
                    </Link>
                </h2>
                <div className="nav-list">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/about" className="nav-link">
                        About Me
                    </Link>
                    <Link to="/project" className="nav-link">
                        Project
                    </Link>
                    <Link to="/blog" className="nav-link">
                        Blog
                    </Link>
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
