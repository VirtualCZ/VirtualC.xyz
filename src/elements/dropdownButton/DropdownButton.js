import React, { useState, useEffect, useRef } from "react";
import "./DropdownButton.css";

const DropdownButton = ({
  name = "Drop",
  options,
  centered = false,
  selectable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef();

  const handleOptionClick = (option) => {
    if (selectable) {
      setSelectedOption(option);
    }
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  const dropdownClassName = centered ? "dropdown2" : "dropdown";
  const dropdownMenuClassName = isOpen ? "dropdown-menu show" : "dropdown-menu";

  return (
    <div className={dropdownClassName} ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.option : name}
      </button>
      <ul className={dropdownMenuClassName}>
        {options.map((option) => (
          <li key={option.id}>
            <a href="#" onClick={() => handleOptionClick(option)}>
              {option.option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
