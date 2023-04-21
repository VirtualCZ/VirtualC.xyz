import { NavLink } from "react-router-dom";
import {
  RiHomeLine,
  RiSettingsLine,
  RiContactsLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar-container">
      <ul>
        <li>
          <NavLink exact to="/">
            <RiHomeLine /> <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">
            <RiContactsLine /> <p>Contacts</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/404">
            <RiErrorWarningLine /> <p>404</p>
          </NavLink>
        </li>
      </ul>
      <ul className="sidebar-bottom">
        <li>
          <NavLink to="/settings">
            <RiSettingsLine /> <p>Settings</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
