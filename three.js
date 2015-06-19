var wrapper = document.getElementById("wrapper");

wrapper.onclick = function MyFunc () {
  document.getElementById("candy");
  candy.innerHTML = "<h3> Because candy tastes amazing! </h3>";
  var newDiv = document.createElement('div');
  document.body.appendChild(newDiv);
  newDiv.style.width = "500px";
  newDiv.style.height = "500px";
  newDiv.style.background = "lime";
};


