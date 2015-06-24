var wrapper = document.getElementById("wrapper");

wrapper.onclick = function() {
  var newClassName = wrapper.className + " thing";
  wrapper.className = newClassName;
};