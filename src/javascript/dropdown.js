// close dropdown when clicked outside or makes a choice
document.addEventListener("click", function (e) {
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
});

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
