import { Link } from "react-router-dom";

const styleNavbar = {
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  padding: "10px",
  color: "black"
};

export const Navbar = () => {
  return (
    <nav>
      <ul style={styleNavbar}>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/madeby`}>Chi siamo</Link>
        </li>
      </ul>
    </nav>
  );
};
