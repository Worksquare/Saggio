import { Link, NavLink } from "react-router-dom";

//components
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to="/">SAGGIO</Link>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="about"> About </NavLink>
        </li>

        <li>
          <NavLink to="library"> library </NavLink>
        </li>

        <li>
          <NavLink to="blog"> Blog </NavLink>
        </li>
      </ul>

      <div className="nav-log-btn">
        <LoginButton />
        <SignUpButton />
      </div>
    </div>
  );
};

export default NavBar;
