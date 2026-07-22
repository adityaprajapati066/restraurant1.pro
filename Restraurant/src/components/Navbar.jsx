import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow sticky-top">
      <div className="container-fluid">
        <Link
          className="btn btn-danger rounded-pill px-4 fw-bold"
          to="/register"
        >
          Regi
        </Link>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/menu">
              Menu
            </Link>
          </li>

          <li className="nav-item bg-gray-200 ml-170 rounded-full">
            <Link className="nav-link fw-semibold" to="/contact">
              Contact
            </Link>
          </li>

          {/* <li className="nav-item bg-gray-200 ml-5 rounded-full text-sm" >
            <Link className="nav-link fw-semibold" to="/admin-contact">Contact Admin</Link>
          </li> */}
          <li className="nav-item dropdown bg-gray-200 ml-5 rounded-full text-sm">
            <button
              className="nav-link fw-semibold dropdown-toggle border-0 bg-transparent"
              data-bs-toggle="dropdown"
            >
              Contact Admin
            </button>

            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/admin-contact">
                  Contact Admin
                </Link>
              </li>

              <li>
                <Link className="dropdown-item" to="/admin-message">
                  Messages
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
