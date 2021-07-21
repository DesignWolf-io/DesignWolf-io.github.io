document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(function (elem) {
    if (elem.href.includes(window.location.pathname))
      elem.className += " current-Link";
  });
});
