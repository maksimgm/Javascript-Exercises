for( var i = 1; i <= 100; i++ ) {
  var divisibleByThree = i % 3 === 0;
  var divisibleByFive = i % 5 === 0;

  if( divisibleByThree) {
    document.write("fizz" + "<br>");
  }
  if(divisibleByFive) {
   document.write("buzz" + "<br>"); 
  }
  if(divisibleByThree && divisibleByFive) {
    document.write("fizzbuzz" + "<br>");
  }
  else{
    document.write(i + "<br>");
  }
}