//In this lesson, I learned that if a function does not have a return statement within it, then the returned value is undefined.  Thus, even if the function correctly conducts the desired calculations internally, the result of those calculations is not accessible.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

var sum = 0;
function addFive() {
  sum = sum + 5;
}

// Only change code above this line
var returnedValue = addFive();
