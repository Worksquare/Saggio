import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

//components
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

//react icon
import { BiMenuAltRight } from "react-icons/bi";
//style
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menuRef = useRef();

  //click outside the menu  to close
  useEffect(() => {
    let handleMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleMenu);

    return () => {
      document.removeEventListener("mousedown", handleMenu);
    };
  }, [showMenu, setShowMenu]);

  return (
    <div className="nav" ref={menuRef}>
      <div className="nav-logo">
        <Link to="/">SAGGIO</Link>
      </div>

      <div className="nav-links" id={showMenu ? "nav-view" : ""}>
        <ul>
          <li>
            <NavLink to="about"> About </NavLink>
          </li>

          <li>
            <NavLink to="library"> Library </NavLink>
          </li>

          <li>
            <NavLink to="blog"> Blog Page </NavLink>
          </li>
        </ul>

        <div className="nav-log-btn">
          <LoginButton className="one" />
          <SignUpButton />
        </div>
      </div>

      <div className="nav-menu" onClick={() => setShowMenu(!showMenu)}>
        <BiMenuAltRight />
      </div>
    </div>
  );
};

export default NavBar;
