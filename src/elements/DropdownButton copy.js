import { useState } from "react";

const DropdownButton = ({ selectable = false, centered = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (selectable) {
    return (
      <div className="dropdown selectable">
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown Button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Option 1</a>
          </li>
          <li>
            <a href="#">Option 2</a>
          </li>
          <li>
            <a href="#">Option 3</a>
          </li>
        </ul>
      </div>
    );
  }
  if (centered) {
    return (
      <div className="dropdown2">
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {" "}
          Dropdown Button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Option 1</a>
          </li>
          <li>
            <a href="#">Option 2</a>
          </li>
          <li>
            <a href="#">Option 3</a>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown Button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="#">Option 1</a>
          </li>
          <li>
            <a href="#">Option 2</a>
          </li>
          <li>
            <a href="#">Option 3</a>
          </li>
        </ul>
      </div>
    );
  }
};

export default DropdownButton;
