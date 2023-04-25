import { NavLink } from "react-router-dom";
import { RiHomeLine, RiSettingsLine, RiErrorWarningLine } from "react-icons/ri";
import { TbBrandBlender } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
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
          <NavLink to="/React">
            <FaReact /> <p>React</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Blender">
            <TbBrandBlender /> <p>Blender</p>
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
