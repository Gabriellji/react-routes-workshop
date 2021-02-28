import './style.css';

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/list">
        <li>List</li>
      </Link>
      <Link to="something">
        <li>Something else</li>
      </Link>
    </ul>
  );
};

export default Navbar;
