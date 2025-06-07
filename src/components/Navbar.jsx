import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <Link to={`/`}>
          <li className={location.pathname === "/" ? "selected" : ""}>Home</li>
        </Link>
        <Link to={`/madeby`}>
          <li className={location.pathname === "/madeby" ? "selected" : ""}>Chi siamo</li>
        </Link>
        <Link to={`/login`}>
          <li className={location.pathname === "/login" ? "selected" : ""}>Login</li>
        </Link>
      </ul>
    </nav>
  );
};
