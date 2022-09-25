import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Users Management</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New User</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;