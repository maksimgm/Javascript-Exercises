
window.onload = function(){
  var wrapper = document.getElementById("wrapper");
  var one = document.getElementById("one");
  wrapper.removeChild(one);

  var para = document.createElement("p");
  var text = document.createTextNode("Fuck Balls");
  para.appendChild(text);

  wrapper.appendChild(para);
}