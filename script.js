function locationHREF() {
    
    window.location.replace("https://www.google.com");

}
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var search = form.querySelector("input[type=search]");
  search.value = "" + search.value;
  form.submit();
});