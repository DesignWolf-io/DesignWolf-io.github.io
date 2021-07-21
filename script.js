document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a").forEach(function (elem) {
    if (window.location.pathname == '/')
      continue;
    else if (elem.href.includes(window.location.pathname)){
      elem.className += " current-Link";
    }
  });
});
