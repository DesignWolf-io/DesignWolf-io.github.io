document
  .querySelectorAll('a[href="' + document.URL + '"]')
  .forEach(function (elem) {
    elem.className += " current-Link";
  });
