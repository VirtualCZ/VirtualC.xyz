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
            <RiHomeLine /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <RiSettingsLine /> Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts">
            <RiContactsLine /> Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/404">
            <RiErrorWarningLine /> 404
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
