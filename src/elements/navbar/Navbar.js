import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/SDS">404</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
