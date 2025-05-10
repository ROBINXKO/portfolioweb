const mobm = document.querySelector(".mobm");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

// code to toggle mobile menu visibility when the button is clicked
mobm.addEventListener("click", () => {
  mobm.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Code to close mobile menu when a menu item is clicked 
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    mobm.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

// code to change the NAV bar background color on scrolling
document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c"; // NAV bar background turns dark after scrolling
  } else {
    header.style.backgroundColor = "transparent"; // NAV bar stays transparent at top
  }
});
