import { Link } from "react-router-dom";
import "./navBar.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li>
          <Link className="nav-list-item" to="/">
            home
          </Link>
        </li>
        <li>
          <Link className="nav-list-item" to="/members">
            members
          </Link>
        </li>
      </ul>
    </div>
  );
};
