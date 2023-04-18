import { useEffect } from "react";

const closeDropdownOnOutsideClick = (e) => {
  const dropdowns = document.querySelectorAll(
    ".dropdown .dropdown-menu, .dropdown2 .dropdown-menu"
  );
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.parentElement.querySelector(
      ".dropdown-toggle, .dropdown2-toggle"
    );
    if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
      dropdown.classList.remove("show");
    } else if (dropdown.contains(e.target) && e.target.nodeName === "A") {
      dropdown.classList.remove("show");
    }
  });
};

const addDropdownEventListeners = () => {
  // close dropdown when clicked outside or makes a choice
  document.addEventListener("click", closeDropdownOnOutsideClick);

  // toggle dropdown
  document
    .querySelectorAll(".dropdown-toggle, .dropdown2-toggle")
    .forEach((toggle) => {
      toggle.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("show");
      });
    });

  // replace text with selected option when selectable class is applied
  document
    .querySelectorAll(
      ".dropdown.selectable .dropdown-menu a, .dropdown2.selectable .dropdown-menu a"
    )
    .forEach((option) => {
      option.addEventListener("click", function () {
        const dropdown = this.closest(
          ".dropdown.selectable, .dropdown2.selectable"
        );
        dropdown.querySelector(
          ".dropdown-toggle, .dropdown2-toggle"
        ).textContent = this.textContent;
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      });
    });
};

const removeDropdownEventListeners = () => {
  document.removeEventListener("click", closeDropdownOnOutsideClick);

  document
    .querySelectorAll(".dropdown-toggle, .dropdown2-toggle")
    .forEach((toggle) => {
      toggle.removeEventListener("click", function () {
        this.nextElementSibling.classList.toggle("show");
      });
    });

  document
    .querySelectorAll(
      ".dropdown.selectable .dropdown-menu a, .dropdown2.selectable .dropdown-menu a"
    )
    .forEach((option) => {
      option.removeEventListener("click", function () {
        const dropdown = this.closest(
          ".dropdown.selectable, .dropdown2.selectable"
        );
        dropdown.querySelector(
          ".dropdown-toggle, .dropdown2-toggle"
        ).textContent = this.textContent;
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      });
    });
};

const DropdownButton = ({
  selectable = false,
  centered = false,
  options = [
    {
      option: "Option 1",
      href: "https://www.google.com/",
      // onClick: () => {
      //   console.log("Clicked a button");
      // },
    },
  ],
  name = "Dropdown",
}) => {
  useEffect(() => {
    addDropdownEventListeners();

    return () => {
      removeDropdownEventListeners();
    };
  }, []);

  if (selectable) {
    const handleOptionClick = (option) => {
      // const dropdown = option.closest(".dropdown.selectable");
      const dropdown = option.closest(
        ".dropdown.selectable, .dropdown2.selectable"
      );
      dropdown.querySelector(".dropdown-toggle").textContent =
        option.textContent;
      dropdown.querySelector(".dropdown-menu").classList.remove("show");
    };

    return (
      <div
        className={centered ? "dropdown selectable" : "dropdown2 selectable"}
      >
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {name}
        </button>
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li>
              <a
                href={option.href ? option.href : "#"}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick(e.target);
                  // option.onClick();
                }}
              >
                {option.option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={centered ? "dropdown2" : "dropdown"}>
      <button
        className="dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {name}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li>
            <a href={option.href ? option.href : "#"}>{option.option}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
