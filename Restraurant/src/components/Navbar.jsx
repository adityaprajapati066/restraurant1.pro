import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand bg-amber-300 py-2 px-2 rounded-full" href="/register">Register</a>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
            
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>

          <li className="nav-item bg-gray-200 ml-210 rounded-full">
            <Link className="nav-link" to="/contact">
            Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;