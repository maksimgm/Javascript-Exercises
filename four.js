window.onload = function() {
  //document.getElementById("two").innerHTML = "I am the superior text";
  
  var wrapper = document.getElementById("wrapper");
  var two = document.getElementById("two");
  
  // Remove a text node
  wrapper.removeChild(two);

  // Create a new text node
  var para = document.createElement('p');
  para.className = "badMuther";
  var curse = document.createTextNode("Bad Ass Muther");

  // Put the text inside the p tag
  para.appendChild(curse);

  // Append the new text node to the targeted element on the page
  wrapper.appendChild(para);
}