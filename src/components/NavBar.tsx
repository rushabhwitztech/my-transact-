import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm custom">
      <h3>Logo</h3>
      <ul className="navbar-nav ml-auto resize">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/screen-one" className="nav-link">
            Transaction
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/screen-two" className="nav-link">
            Category
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Signup /Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
