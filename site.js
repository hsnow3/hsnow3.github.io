// Builds the email link in the visitor's browser, so the full address
// never appears as plain text in the page source. To change the address,
// edit the data-u (before the @) and data-d (after the @) values in the HTML.
document.querySelectorAll("a.email").forEach(function (a) {
  var address = a.dataset.u + "@" + a.dataset.d;
  a.href = "mailto:" + address;
  a.textContent = address;
});
