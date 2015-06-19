var wrapper = document.getElementById("wrapper")

wrapper.onload = function myFunction() {
  var p = document.createElement("p");
  var t = document.createTextNode("I am the superior text");
  p.appendChild(t);
  document.body.appendChild(p);
}