for( var i = 1; i <= 100; i++ ) {
  var divisibleByThree = i % 3 === 0;
  var divisibleByFive = i % 5 === 0;

  if( divisibleByThree) {
    console.log("fizz");
  }
  if(divisibleByFive) {
   console.log("buzz"); 
  }
  if(divisibleByThree && divisibleByFive) {
    console.log("fizzbuzz");
  }
  else{
    console.log(i);
  }
}