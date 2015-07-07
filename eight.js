var magic = document.getElementById("magic");

function myFunction() {
  magic.innerHTML = magic.innerHTML.replace(/and/g, 'dog');
}

myFunction();