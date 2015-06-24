window.onload = function() {
<<<<<<< HEAD
  document.getElementById("two").innerHTML = "I am the superior text";
 // var p = document.createElement("p");
//  var t = document.createTextNode("I am the superior text");
 // p.appendChild(t);
 // document.getElementById("p");
//  document.two= p;
=======
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
>>>>>>> 86678bdcba0ebc030aee67db6cb2a754ed02e3d8
}