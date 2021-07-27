// Current Page Selector
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(function (elem) {
    if (window.location.pathname == "/") return;
    else if (elem.href.includes(window.location.pathname)) {
      elem.className += " current-Link";
    }
  });
});

// Hamburger Dropdown
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
