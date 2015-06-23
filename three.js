var wrapper = document.getElementById("wrapper");

wrapper.onclick = function MyFunc () {
  // candy.innerHTML = "<h3> Because candy tastes amazing! </h3>";
  var newClassName = wrapper.className + " thing";
  wrapper.className = newClassName;
};

