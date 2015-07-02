for( var i = 1; i <= 100; i++ ) {
  var divisibleByThree = i % 3;
  var divisibleByFive = i % 5;

  if( divisibleByThree === 0) {
    console.log("fizz");
  }
  if(divisibleByFive === 0) {
   console.log("buzz"); 
  }
  if(divisibleByThree && divisibleByFive === 0) {
    console.log("fizzbuzz");
  }
  else{
    console.log(i);
  }
}