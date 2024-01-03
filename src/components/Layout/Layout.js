import { Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
    return (
        <div>
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                        {/* le About ou about même choe , je sais pas pourquoi */}
                        <Link to="/About" className="nav-item">About</Link>
                    </li>
                    <li>
                        <Link to="/Search" className="nav-item">Search</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default Layout;