//This lesson explains that if a variable is declared using the var keyword inside a function, then it has local scope, which means that it cannot be seen (e.g. it is undefined) outside of the function.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 42;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
